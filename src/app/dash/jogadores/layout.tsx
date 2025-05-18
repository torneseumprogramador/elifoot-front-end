import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro de jogador | Elifoot",
  description: "Cadastro de jogador do seu time.",
};

export default function EstadioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 