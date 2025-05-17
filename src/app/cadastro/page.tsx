'use client'

import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { RegisterForm } from '@/components/organisms/RegisterForm';

export default function Cadastro() {
  return (
    <AuthTemplate
      title="Crie sua conta"
      subtitle="Preencha seus dados"
      showLoginButton
      showForgotPasswordLink={true}
    >
      <RegisterForm />
    </AuthTemplate>
  );
}
