import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro de estádio | Elifoot",
  description: "Cadastro de estádio do seu time.",
};

export default function EstadioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 