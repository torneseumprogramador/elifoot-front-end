"use client";

import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function EstadioDetalhes({
  params
}: {
  params: { id: string }
}) {
  return (
    <DashboardTemplate
      title="Detalhes do Estádio"
      backPath="/dash/estadios"
      backPathLabel="Voltar para lista de estádios"
      type="estadio"
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold text-gray-700">ID do Estádio: {params.id}</h1>
      </div>
    </DashboardTemplate>
  );
}
