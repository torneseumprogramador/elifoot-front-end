import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

export function RecoverPasswordForm() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de recuperação de senha
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField
        type="email"
        placeholder="Seu Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        icon={<FiMail size={20} />}
        required
      />

      <Button
        type="submit"
        className="mt-4 mx-auto block w-[250px] rounded-[10px]"
      >
        RECUPERAR
      </Button>
    </form>
  );
} 