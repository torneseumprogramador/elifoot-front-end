import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiUser, FiLock } from "react-icons/fi";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { authService } from "@/services/authService";

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authService.login({
        email: formData.email,
        password: formData.password,
      });

      router.push("/dash");
    } catch (err) {
      setError("Email ou senha inválidos");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <FormField
          type="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          icon={<FiUser size={20} />}
          required
        />

        <FormField
          type="password"
          placeholder="Sua Senha"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          icon={<FiLock size={20} />}
          required
          bgColor="#1A1A1A"
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <Link
          href="/recuperar-senha"
          className="text-gray-400 hover:text-[#E4A853]"
        >
          Recuperar minha senha
        </Link>
        <Link href="/cadastro" className="text-[#E4A853] hover:text-[#c89447]">
          Crie sua conta agora
        </Link>
      </div>

      <Button
        type="submit"
        className="w-[250px] rounded-[10px] mx-auto block"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}
