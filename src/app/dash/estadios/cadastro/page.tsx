"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState } from "react";
import { FiMapPin, FiUsers, FiImage } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CadastroEstadio() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    capacidade: "",
    imagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de cadastro
    console.log(formData);
    setIsModalOpen(true);
  };

  const handleNewRegistration = () => {
    setIsModalOpen(false);
    setFormData({
      nome: "",
      cidade: "",
      capacidade: "",
      imagem: ""
    });
  };

  const handleGoHome = () => {
    router.push("/dash");
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

          <div className="grid grid-cols-2 gap-4">
            <FormField
              type="number"
              placeholder="Capacidade"
              value={formData.capacidade}
              onChange={(e) => setFormData({ ...formData, capacidade: e.target.value })}
              icon={<FiUsers size={20} />}
              required
              bgColor="#2C2C2C"
            />

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
          >
            Cadastrar Estádio
          </Button>
        </form>
      </DashboardTemplate>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNewRegistration={handleNewRegistration}
        onGoHome={handleGoHome}
      />
    </>
  );
} 