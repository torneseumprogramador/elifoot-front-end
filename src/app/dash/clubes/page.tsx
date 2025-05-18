"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { ClubCard } from "@/components/molecules/ClubCard";
import { Slideshow } from "@/components/molecules/Slideshow";
import { clubService } from "@/services/clubService";
import { Club } from "@/types/club";
import { useApi } from "@/hooks/useApi";

export default function ClubesPage() {
  const { data: clubs, loading } = useApi<Club>({
    fetchFn: clubService.getAll,
    cacheKey: "clubs-list",
  });

  if (loading) {
    return (
      <DashboardHomeTemplate
        title="Carregando clubes..."
        subtitle="Por favor, aguarde"
        activeTab="clubes"
      >
        <div className="flex items-center justify-center">
          <div className="text-xl font-semibold text-gray-600">
            Carregando...
          </div>
        </div>
      </DashboardHomeTemplate>
    );
  }

  return (
    <DashboardHomeTemplate
      title="Clubes"
      subtitle="Lista de todos os clubes cadastrados"
      activeTab="clubes"
    >
      <Slideshow>
        {clubs.map((club) => (
          <ClubCard key={club.id} name={club.name} founded={club.founded} />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
}
