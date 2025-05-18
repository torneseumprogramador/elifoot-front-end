"use client";

import { useEffect, useState } from "react";
import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { PlayerCard } from "@/components/molecules/PlayerCard";
import { Slideshow } from "@/components/molecules/Slideshow";
import { playerService } from "@/services/playerService";
import { Player } from "@/types/player";

export default function JogadoresPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await playerService.getAll();
        setPlayers(response);
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

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