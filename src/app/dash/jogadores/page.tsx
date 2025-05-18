"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { PlayerCard } from "@/components/molecules/PlayerCard";
import { Slideshow } from "@/components/molecules/Slideshow";
import { playerService } from "@/services/playerService";
import { Player } from "@/types/player";
import { useApi } from "@/hooks/useApi";

export default function JogadoresPage() {
  const { data: players, loading } = useApi<Player>({
    fetchFn: playerService.getAll,
    cacheKey: 'players-list'
  });

  if (loading) {
    return (
      <DashboardHomeTemplate
        title="Carregando jogadores..."
        subtitle="Por favor, aguarde"
        activeTab="jogadores"
      >
        <div>Loading...</div>
      </DashboardHomeTemplate>
    );
  }

  return (
    <DashboardHomeTemplate
      title="Jogadores"
      subtitle="Lista de todos os jogadores cadastrados"
      activeTab="jogadores"
    >
      <Slideshow>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            position={player.position}
            shirtNumber={player.shirtNumber}
          />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
} 