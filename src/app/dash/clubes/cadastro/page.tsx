"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState, useEffect } from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { clubService } from "@/services/clubService";
import { stadiumService } from "@/services/stadiumService";
import { clearCache } from "@/hooks/useApi";
import { Stadium } from "@/types/stadium";

export default function CadastroClube() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stadiums, setStadiums] = useState<Stadium[]>([]);
  const [formData, setFormData] = useState({
    nome: "",
    fundacao: "",
    estadioId: "",
  });

  useEffect(() => {
    const loadStadiums = async () => {
      try {
        const stadiumsList = await stadiumService.getAll();
        setStadiums(stadiumsList);
      } catch (err) {
        console.error("Error loading stadiums:", err);
      }
    };

    loadStadiums();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Formata a data para YYYY-MM-DD
      const formattedDate = new Date(formData.fundacao).toISOString().split('T')[0];

      await clubService.create({
        name: formData.nome,
        founded: formattedDate,
        stadiumId: Number(formData.estadioId)
      });

      // Limpa o cache dos clubes após criar um novo
      clearCache('clubs-list');
      setIsModalOpen(true);
    } catch (err: any) {
      if (err.response?.status === 409) {
        setError("Este clube já está cadastrado.");
      } else {
        setError("Erro ao cadastrar clube. Por favor, tente novamente.");
      }
      console.error("Club registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRegistration = () => {
    setIsModalOpen(false);
    setFormData({
      nome: "",
      fundacao: "",
      estadioId: "",
    });
  };

  const handleGoBack = () => {
    router.push("/dash/clubes");
  };

  return (
    <>
      <DashboardTemplate
        title="Cadastre o seu Clube"
        type="clube"
        backPathLabel="Voltar para lista de clubes"
        backPath="/dash/clubes"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <FormField
            type="text"
            placeholder="Nome do Clube"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            icon={<FiUser size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              type="date"
              placeholder="Data de Fundação"
              value={formData.fundacao}
              onChange={(e) => setFormData({ ...formData, fundacao: e.target.value })}
              icon={<FiCalendar size={20} />}
              required
              bgColor="#2C2C2C"
            />

            <select
              value={formData.estadioId}
              onChange={(e) => setFormData({ ...formData, estadioId: e.target.value })}
              className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-[#E4A853]"
              required
            >
              <option value="">Selecione o estádio</option>
              {stadiums.map((stadium) => (
                <option key={stadium.id} value={stadium.id}>
                  {stadium.name}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-8"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Clube"}
          </Button>
        </form>
      </DashboardTemplate>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNewRegistration={handleNewRegistration}
        onBack={handleGoBack}
      />
    </>
  );
} 