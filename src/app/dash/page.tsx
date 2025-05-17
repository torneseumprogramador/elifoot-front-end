"use client";

import { Button } from "@/components/atoms/Button";
import { DashTemplate } from "@/components/templates/DashTemplate";

export default function DashCadastro() {
  return (
    <DashTemplate title="O que vamos cadastrar hoje?" subtitle="Escolha o que cadastrar">
      <div className="flex justify-center gap-4">
        <Button
            type="submit"
            variant="outline"
            className="w-[400px] rounded-[10px]"
        >
            Cadastrar Estádio
        </Button>

        <Button
            type="submit"
            variant="black-white"
            className="w-[400px] rounded-[10px]"
        >
            Cadastrar Clube
        </Button>

        <Button
            type="submit"
            variant="outline"
            className="w-[400px] rounded-[10px]"
        >
            Cadastrar Jogador
        </Button>
      </div>
    </DashTemplate>
  );
}
