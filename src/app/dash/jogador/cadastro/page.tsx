"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { FiUser, FiShield, FiHash, FiImage } from "react-icons/fi";

export default function CadastroJogador() {
  const [formData, setFormData] = useState({
    nome: "",
    posicao: "",
    clube: "",
    numero: "",
    imagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de cadastro
    console.log(formData);
  };

  return (
    <DashboardTemplate
      title="Cadastre o seu Jogador"
      type="jogador"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <FormField
            type="text"
            placeholder="Posição de Jogo"
            value={formData.posicao}
            onChange={(e) => setFormData({ ...formData, posicao: e.target.value })}
            icon={<FiUser size={20} />}
            required
            bgColor="#2C2C2C"
          />

          <FormField
            type="number"
            placeholder="Número camisa"
            value={formData.numero}
            onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
            icon={<FiHash size={20} />}
            required
            bgColor="#2C2C2C"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            type="text"
            placeholder="Clube atual"
            value={formData.clube}
            onChange={(e) => setFormData({ ...formData, clube: e.target.value })}
            icon={<FiShield size={20} />}
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
          Cadastrar Jogador
        </Button>
      </form>
    </DashboardTemplate>
  );
} 