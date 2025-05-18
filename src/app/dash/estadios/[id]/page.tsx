import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default async function EstadioDetalhes(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
  
    return (
      <DashboardTemplate
        title="Detalhes do Estádio"
        backPath="/dash/estadios"
        backPathLabel="Voltar para lista de estádios"
        type="estadio"
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-gray-700">
            ID do Estádio: {id}
          </h1>
        </div>
      </DashboardTemplate>
    );
  }
  