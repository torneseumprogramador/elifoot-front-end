"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { PlayerCard } from "@/components/molecules/PlayerCard";
import { Slideshow } from "@/components/molecules/Slideshow";

// This would typically come from an API
const MOCK_PLAYERS = [
  {
    name: "Pablo Vegetti",
    position: "Atacante",
    number: "99",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  {
    name: "Dimitri Payet",
    position: "Meia",
    number: "10",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  {
    name: "Léo Jardim",
    position: "Goleiro",
    number: "01",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  {
    name: "Manuel Capasso",
    position: "Zagueiro",
    number: "24",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  {
    name: "Manuel Capasso",
    position: "Zagueiro",
    number: "24",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  {
    name: "Manuel Capasso",
    position: "Zagueiro",
    number: "24",
    club: "Vasco da Gama",
    imageUrl: "/jogador.svg"
  },
  // Add more players as needed
];

export default function JogadoresPage() {
  return (
    <DashboardHomeTemplate
      title="Seja bem-vindo a home"
      subtitle="Aqui você pode ver todos cadastros efetuados"
      activeTab="jogadores"
    >
      <Slideshow>
        {MOCK_PLAYERS.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            position={player.position}
            number={player.number}
            club={player.club}
            imageUrl={player.imageUrl}
          />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
} 