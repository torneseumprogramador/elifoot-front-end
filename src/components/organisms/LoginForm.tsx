import { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

export function LoginForm() {
  const [formData, setFormData] = useState({
    nome: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar a lógica de login
    console.log('Login attempt:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <FormField
          type="text"
          placeholder="Seu Nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          icon={<FiUser size={20} />}
          required
        />

        <FormField
          type="password"
          placeholder="Sua Senha"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          icon={<FiLock size={20} />}
          required
          bgColor="#1A1A1A"
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <Link href="/recuperar-senha" className="text-gray-400 hover:text-[#E4A853]">
          Recuperar minha senha
        </Link>
        <Link href="/cadastro" className="text-[#E4A853] hover:text-[#c89447]">
          Crie sua conta agora
        </Link>
      </div>

      <Button
        type="submit"
        className="w-[250px] rounded-[10px] mx-auto block"
      >
        Entrar
      </Button>
    </form>
  );
} 