import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro | Elifoot",
  description: "Crie sua conta no Elifoot e comece a gerenciar seu time.",
};

export default function CadastroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 