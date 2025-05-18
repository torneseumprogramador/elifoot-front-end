'use client';

import { ReactNode } from 'react';
import { Header } from '../molecules/Header';
import Link from 'next/link';
import { AuthGuard } from "../guards/AuthGuard";

interface DashboardHomeTemplateProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  activeTab: 'estadios' | 'clubes' | 'jogadores';
}

export function DashboardHomeTemplate({
  children,
  title,
  subtitle,
  activeTab
}: DashboardHomeTemplateProps) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-[#E4A853] text-4xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-gray-400">
              {subtitle}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="/dash/estadios"
              className={`py-3 px-6 rounded-full transition-colors ${
                activeTab === 'estadios'
                  ? 'bg-[#E4A853] text-black'
                  : 'border-2 border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Ver todos Estádios
            </Link>

            <Link
              href="/dash/clubes"
              className={`py-3 px-6 rounded-full transition-colors ${
                activeTab === 'clubes'
                  ? 'bg-[#E4A853] text-black'
                  : 'border-2 border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Ver todos Clubes
            </Link>

            <Link
              href="/dash/jogadores"
              className={`py-3 px-6 rounded-full transition-colors ${
                activeTab === 'jogadores'
                  ? 'bg-[#E4A853] text-black'
                  : 'border-2 border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Ver todos Jogadores
            </Link>
          </div>

          {children}
        </main>
      </div>
    </AuthGuard>
  );
} 