"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState, useEffect } from "react";
import { FiUser, FiShield, FiHash, FiImage } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { playerService } from "@/services/playerService";
import { clubService } from "@/services/clubService";
import { clearCache } from "@/hooks/useApi";
import { PlayerPosition } from "@/types/player";
import { Club } from "@/types/club";

export default function CadastroJogador() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clubs, setClubs] = useState<Club[]>([]);
  const [formData, setFormData] = useState({
    nome: "",
    posicao: "",
    clubeId: "",
    numero: "",
    imagem: ""
  });

  useEffect(() => {
    const loadClubs = async () => {
      try {
        const clubsList = await clubService.getAll();
        setClubs(clubsList);
      } catch (err) {
        console.error("Error loading clubs:", err);
      }
    };

    loadClubs();
  }, []);

  const positions: PlayerPosition[] = ['FORWARD', 'MIDFIELDER', 'DEFENDER', 'GOALKEEPER'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await playerService.create({
        name: formData.nome,
        position: formData.posicao as PlayerPosition,
        shirtNumber: Number(formData.numero),
        clubId: Number(formData.clubeId)
      });

      // Limpa o cache dos jogadores após criar um novo
      clearCache('players-list');
      setIsModalOpen(true);
    } catch (err: any) {
      if (err.response?.status === 409) {
        setError("Este jogador já está cadastrado.");
      } else {
        setError("Erro ao cadastrar jogador. Por favor, tente novamente.");
      }
      console.error("Player registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRegistration = () => {
    setIsModalOpen(false);
    setFormData({
      nome: "",
      posicao: "",
      clubeId: "",
      numero: "",
      imagem: ""
    });
  };

  const handleGoBack = () => {
    router.push("/dash/jogadores");
  };

  return (
    <>
      <DashboardTemplate
        title="Cadastre o seu Jogador"
        type="jogador"
        backPathLabel="Voltar para lista de jogadores"
        backPath="/dash/jogadores"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <FormField
            type="text"
            placeholder="Nome do Jogador"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            icon={<FiUser size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              value={formData.posicao}
              onChange={(e) => setFormData({ ...formData, posicao: e.target.value })}
              className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-[#E4A853]"
              required
            >
              <option value="">Selecione a posição</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>

            <FormField
              type="number"
              placeholder="Número da camisa"
              value={formData.numero}
              onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
              icon={<FiHash size={20} />}
              required
              bgColor="#2C2C2C"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              value={formData.clubeId}
              onChange={(e) => setFormData({ ...formData, clubeId: e.target.value })}
              className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-[#E4A853]"
              required
            >
              <option value="">Selecione o clube</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              ))}
            </select>

            <FormField
              type="text"
              placeholder="Imagem"
              value={formData.imagem}
              onChange={(e) => setFormData({ ...formData, imagem: e.target.value })}
              icon={<FiImage size={20} />}
              required
              bgColor="#2C2C2C"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-8"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Jogador"}
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