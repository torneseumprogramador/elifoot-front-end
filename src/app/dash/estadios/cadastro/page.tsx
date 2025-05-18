"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState } from "react";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { stadiumService } from "@/services/stadiumService";
import { clearCache } from "@/hooks/useApi";

export default function CadastroEstadio() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    capacidade: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await stadiumService.create({
        name: formData.nome,
        city: formData.cidade,
        capacity: Number(formData.capacidade)
      });

      // Limpa o cache dos estádios após criar um novo
      clearCache('stadiums-list');
      setIsModalOpen(true);
    } catch (err: any) {
      if (err.response?.status === 409) {
        setError("Este estádio já está cadastrado.");
      } else {
        setError("Erro ao cadastrar estádio. Por favor, tente novamente.");
      }
      console.error("Stadium registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRegistration = () => {
    setIsModalOpen(false);
    setFormData({
      nome: "",
      cidade: "",
      capacidade: "",
    });
  };

  const handleGoBack = () => {
    router.push("/dash/estadios");
  };

  return (
    <>
      <DashboardTemplate
        title="Cadastre o seu Estádio"
        type="estadio"
        backPathLabel="Voltar para lista de estádios"
        backPath="/dash/estadios"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <FormField
            type="text"
            placeholder="Nome do Estádio"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            icon={<FiMapPin size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <FormField
            type="text"
            placeholder="Em qual cidade fica o estádio?"
            value={formData.cidade}
            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
            icon={<FiMapPin size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <FormField
            type="number"
            placeholder="Capacidade"
            value={formData.capacidade}
            onChange={(e) => setFormData({ ...formData, capacidade: e.target.value })}
            icon={<FiUsers size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-8"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Estádio"}
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