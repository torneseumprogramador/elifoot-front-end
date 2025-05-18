import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { userService } from "@/services/userService";
import { RegisterSuccessModal } from "../molecules/RegisterSuccessModal";

export function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validação das senhas
    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    try {
      await userService.create({
        name: formData.nome,
        email: formData.email,
        password: formData.senha,
        scopes: [1], // Escopo padrão para usuários normais
      });

      setShowSuccessModal(true);
    } catch (err: any) {
      if (err.response?.status === 409) {
        setError("Este email já está cadastrado.");
      } else {
        setError("Erro ao criar usuário. Por favor, tente novamente.");
      }
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <FormField
          type="text"
          placeholder="Seu Nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          icon={<FiUser size={20} />}
          required
          bgColor="#F5F5F5"
          border={true}
          textColor="text-black"
        />

        <FormField
          type="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          icon={<FiMail size={20} />}
          required
          bgColor="#F5F5F5"
          border={true}
          textColor="text-black"
        />

        <FormField
          type="password"
          placeholder="Sua Senha"
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          icon={<FiLock size={20} />}
          required
          bgColor="#F5F5F5"
          border={true}
          textColor="text-black"
        />

        <FormField
          type="password"
          placeholder="Confirme sua Senha"
          value={formData.confirmarSenha}
          onChange={(e) =>
            setFormData({ ...formData, confirmarSenha: e.target.value })
          }
          icon={<FiLock size={20} />}
          required
          bgColor="#F5F5F5"
          border={true}
          textColor="text-black"
        />

        <Button
          type="submit"
          variant="black"
          className="mt-4 mx-auto block w-[250px] rounded-[10px]"
          disabled={loading}
        >
          {loading ? "CADASTRANDO..." : "CADASTRAR"}
        </Button>
      </form>

      <RegisterSuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
      />
    </>
  );
}
