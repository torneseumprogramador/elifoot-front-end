"use client";

import { AuthTemplate } from "@/components/templates/AuthTemplate";
import { RecoverPasswordForm } from "@/components/organisms/RecoverPasswordForm";

export default function RecuperarSenha() {
  return (
    <AuthTemplate
      title="Recuperar senha"
      subtitle="Preencha seu email para recuperar sua senha"
      showLoginButton
      showRegisterLink={true}
    >
      <RecoverPasswordForm />
    </AuthTemplate>
  );
}
