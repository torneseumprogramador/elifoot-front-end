import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar Senha | Elifoot",
  description: "Recupere sua senha no Elifoot e continue gerenciando seu time.",
};

export default function RecuperarSenhaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 