"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      router.push("/");
    }
  }, [router]);

  // Se não estiver autenticado, não renderiza nada enquanto redireciona
  if (!authService.isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
}
