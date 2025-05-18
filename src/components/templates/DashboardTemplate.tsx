'use client';

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { AuthGuard } from "../guards/AuthGuard";

interface DashboardTemplateProps {
  children: ReactNode;
  title: string;
  backPath: string;
  backPathLabel: string;
  type: "estadio" | "clube" | "jogador";
}

export function DashboardTemplate({
  children,
  title,
  backPath,
  backPathLabel,
  type
}: DashboardTemplateProps) {
  const images = {
    estadio: "/estadio.svg",
    clube: "/clube.svg",
    jogador: "/jogador.svg"
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex bg-black">
        {/* Left Side - Form */}
        <div className="w-1/2 p-12">
          <Link 
            href={backPath} 
            className="inline-flex items-center text-gray-400 hover:text-white mb-12"
          >
            <FiArrowLeft className="mr-2" />
            {backPathLabel}
          </Link>

          <div className="mb-12">
            <Image
              src="/logo.svg"
              alt="Elifoot Logo"
              width={180}
              height={50}
              priority
            />
          </div>

          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-8">
              {title}
            </h1>

            {children}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative">
          <Image
            src={images[type]}
            alt={`Imagem de ${type}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-l-3xl"
            priority
          />
        </div>
      </div>
    </AuthGuard>
  );
} 