"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { ClubCard } from "@/components/molecules/ClubCard";
import { Slideshow } from "@/components/molecules/Slideshow";

// This would typically come from an API
const MOCK_CLUBS = [
  {
    name: "Vasco da Gama",
    location: "Estádio São Januário",
    foundingDate: "21/08/1898",
    imageUrl: "/clube.svg"
  },
  {
    name: "Internacional",
    location: "Estádio Beira-Rio",
    foundingDate: "04/04/1909",
    imageUrl: "/clube.svg"
  },
  {
    name: "Flamengo",
    location: "Estádio Maracanã",
    foundingDate: "17/11/1895",
    imageUrl: "/clube.svg"
  },
  {
    name: "Palmeiras",
    location: "Estádio Allianz Parque",
    foundingDate: "26/08/1914",
    imageUrl: "/clube.svg"
  },
  {
    name: "Palmeiras",
    location: "Estádio Allianz Parque",
    foundingDate: "26/08/1914",
    imageUrl: "/clube.svg"
  },
  {
    name: "Palmeiras",
    location: "Estádio Allianz Parque",
    foundingDate: "26/08/1914",
    imageUrl: "/clube.svg"
  },
  // Add more clubs as needed
];

export default function ClubesPage() {
  return (
    <DashboardHomeTemplate
      title="Seja bem-vindo a home"
      subtitle="Aqui você pode ver todos cadastros efetuados"
      activeTab="clubes"
    >
      <Slideshow>
        {MOCK_CLUBS.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            location={club.location}
            foundingDate={club.foundingDate}
            imageUrl={club.imageUrl}
          />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
} 