"use client";

import { DashboardHomeTemplate } from "@/components/templates/DashboardHomeTemplate";
import { StadiumCard } from "@/components/molecules/StadiumCard";
import { Slideshow } from "@/components/molecules/Slideshow";

// This would typically come from an API
const MOCK_STADIUMS = [
  {
    name: "São Januário",
    city: "Rio de Janeiro",
    capacity: "21.880",
    imageUrl: "/estadio.svg"
  },
  {
    name: "Beira-Rio",
    city: "Porto Alegre",
    capacity: "50.842",
    imageUrl: "/estadio.svg"
  },
  {
    name: "Maracanã",
    city: "Rio de Janeiro",
    capacity: "78.838",
    imageUrl: "/estadio.svg"
  },
  {
    name: "Allianz Parque",
    city: "São Paulo",
    capacity: "43.713",
    imageUrl: "/estadio.svg"
  },
  {
    name: "Allianz Parque",
    city: "São Paulo",
    capacity: "43.713",
    imageUrl: "/estadio.svg"
  },
  {
    name: "Allianz Parque",
    city: "São Paulo",
    capacity: "43.713",
    imageUrl: "/estadio.svg"
  },
  // Add more stadiums as needed
];

export default function EstadiosPage() {
  return (
    <DashboardHomeTemplate
      title="Seja bem-vindo a home"
      subtitle="Aqui você pode ver todos cadastros efetuados"
      activeTab="estadios"
    >
      <Slideshow>
        {MOCK_STADIUMS.map((stadium, index) => (
          <StadiumCard
            key={index}
            name={stadium.name}
            city={stadium.city}
            capacity={stadium.capacity}
            imageUrl={stadium.imageUrl}
          />
        ))}
      </Slideshow>
    </DashboardHomeTemplate>
  );
} 