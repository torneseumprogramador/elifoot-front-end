"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";
import { SuccessModal } from "@/components/molecules/SuccessModal";
import { useState, useRef } from "react";
import { FiMapPin, FiUsers, FiImage } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { stadiumService } from "@/services/stadiumService";
import { clearCache } from "@/hooks/useApi";
import { slugify } from "@/helpers/imageHelper";

export default function CadastroEstadio() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    capacidade: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedImage(file);
      } else {
        setError("Por favor, selecione apenas arquivos de imagem.");
      }
    }
  };

  const saveImage = async (stadiumName: string) => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('entityName', stadiumName);
    formData.append('entityType', 'stadium');

    try {
      // Save the image to the public/uploads directory
      const response = await fetch('/api/upload/stadium', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // We don't want to block the stadium creation if image upload fails
    }
  };

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

      // After successful stadium creation, save the image
      if (selectedImage) {
        await saveImage(formData.nome);
      }

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
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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

          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              id="stadium-image"
            />
            <label
              htmlFor="stadium-image"
              className="flex items-center gap-2 px-4 py-3 bg-[#2C2C2C] rounded-lg text-white border border-gray-700 cursor-pointer hover:border-[#E4A853] transition-colors"
            >
              <FiImage size={20} />
              {selectedImage ? selectedImage.name : "Selecionar imagem do estádio"}
            </label>
          </div>

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