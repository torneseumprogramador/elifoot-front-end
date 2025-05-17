'use client'

import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { RecoverPasswordForm } from '@/components/organisms/RecoverPasswordForm';

export default function EsqueciSenha() {
  return (
    <AuthTemplate
      title="Recuperar senha"
      subtitle="Preencha seu email para recuperar sua senha"
      showLoginButton
    >
      <RecoverPasswordForm />
    </AuthTemplate>
  );
}
