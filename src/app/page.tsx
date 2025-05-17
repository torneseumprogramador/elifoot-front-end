'use client';

import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { LoginForm } from '@/components/organisms/LoginForm';

export default function Home() {
  return (
    <AuthTemplate
      title="Bem-vindo de volta!"
      subtitle="Acesse a sua conta"
    >
      <LoginForm />
    </AuthTemplate>
  );
}
