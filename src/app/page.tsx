"use client";

import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";

export default function Home() {
  return (
    <HomeTemplate title="Bem-vindo de volta!" subtitle="Acesse a sua conta">
      <LoginForm />
    </HomeTemplate>
  );
}
