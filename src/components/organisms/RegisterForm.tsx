import { useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de cadastro
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField
        type="text"
        placeholder="Seu Nome"
        value={formData.nome}
        onChange={(e) => setFormData({...formData, nome: e.target.value})}
        icon={<FiUser size={20} />}
        required
      />

      <FormField
        type="email"
        placeholder="Seu Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        icon={<FiMail size={20} />}
        required
      />

      <FormField
        type="password"
        placeholder="Sua Senha"
        value={formData.senha}
        onChange={(e) => setFormData({...formData, senha: e.target.value})}
        icon={<FiLock size={20} />}
        required
      />

      <FormField
        type="password"
        placeholder="Confirme sua Senha"
        value={formData.confirmarSenha}
        onChange={(e) => setFormData({...formData, confirmarSenha: e.target.value})}
        icon={<FiLock size={20} />}
        required
      />

      <Button
        type="submit"
        className="mt-4 mx-auto block w-[250px] rounded-[10px]"
      >
        CADASTRAR
      </Button>
    </form>
  );
} 