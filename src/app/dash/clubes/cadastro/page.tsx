"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState } from "react";
import { FiShield, FiCalendar, FiMapPin, FiImage } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CadastroClube() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    fundacao: "",
    estadio: "",
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
      fundacao: "",
      estadio: "",
      imagem: ""
    });
  };

  const handleGoHome = () => {
    router.push("/dash");
  };

  return (
    <>
      <DashboardTemplate
        title="Cadastre o seu Clube"
        type="clube"
        backPath="/dash/clubes"
        backPathLabel="Voltar para lista de clubes"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            type="text"
            placeholder="Nome do Clube"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            icon={<FiShield size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              type="date"
              placeholder="Data de fundação"
              value={formData.fundacao}
              onChange={(e) => setFormData({ ...formData, fundacao: e.target.value })}
              icon={<FiCalendar size={20} />}
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

          <FormField
            type="text"
            placeholder="Seu clube faz parte de qual Estádio?"
            value={formData.estadio}
            onChange={(e) => setFormData({ ...formData, estadio: e.target.value })}
            icon={<FiMapPin size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-8"
          >
            Cadastrar Clube
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