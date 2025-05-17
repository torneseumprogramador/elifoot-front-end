import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Elifoot",
  description: "Dashboard do Elifoot, onde você pode gerenciar seu time.",
};

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 