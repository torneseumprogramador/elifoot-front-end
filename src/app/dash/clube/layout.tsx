import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro de clube | Elifoot",
  description: "Cadastro de clube do seu time.",
};

export default function EstadioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 