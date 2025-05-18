"use client";

import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";

interface HomeProps {
  title?: string;
  subtitle?: string;
}

export default function Home({
  title = "Bem-vindo de volta!",
  subtitle = "Acesse a sua conta",
}: HomeProps) {
  return (
    <HomeTemplate title={title} subtitle={subtitle}>
      <LoginForm />
    </HomeTemplate>
  );
}
