"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { StadiumCard } from "@/components/molecules/StadiumCard";
import { Slideshow } from "@/components/molecules/Slideshow";
import { stadiumService } from "@/services/stadiumService";
import { Stadium } from "@/types/stadium";
import { useApi } from "@/hooks/useApi";

export default function EstadiosPage() {
  const { data: stadiums, loading } = useApi<Stadium>({
    fetchFn: stadiumService.getAll,
    cacheKey: 'stadiums-list'
  });

  if (loading) {
    return (
      <DashboardHomeTemplate
        title="Carregando estádios..."
        subtitle="Por favor, aguarde"
        activeTab="estadios"
      >
        <div>Loading...</div>
      </DashboardHomeTemplate>
    );
  }

  return (
    <DashboardHomeTemplate
      title="Estádios"
      subtitle="Lista de todos os estádios cadastrados"
      activeTab="estadios"
    >
      <Slideshow>
        {stadiums.map((stadium) => (
          <StadiumCard
            key={stadium.id}
            name={stadium.name}
            city={stadium.city}
            capacity={stadium.capacity}
          />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
} 