"use client";

import { LinkButton } from "@/components/atoms/LinkButton";
import { DashTemplate } from "@/components/templates/DashTemplate";

export default function DashCadastro() {
  return (
    <DashTemplate
      title="O que vamos fazer hoje?"
      subtitle="Escolha o que cadastrar"
    >
      <div className="flex justify-center gap-4">
        <LinkButton
          href="/dash/estadios/cadastro"
          variant="outline"
          className="w-[400px] rounded-[10px]"
        >
          Cadastrar Estádio
        </LinkButton>

        <LinkButton
          href="/dash/clubes/cadastro"
          variant="black-white"
          className="w-[400px] rounded-[10px]"
        >
          Cadastrar Clube
        </LinkButton>

        <LinkButton
          href="/dash/jogadores/cadastro"
          variant="outline"
          className="w-[400px] rounded-[10px]"
        >
          Cadastrar Jogador
        </LinkButton>
      </div>
    </DashTemplate>
  );
}
