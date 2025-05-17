'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar a lógica de login
    console.log('Login attempt:', formData);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-8">
        <div className="flex justify-center mb-12">
          <Image
            src="/logo.svg"
            alt="Elifoot Logo"
            width={200}
            height={80}
            priority
          />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h1>
          <p className="text-gray-400">Acesse a sua conta</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="text"
              id="nome"
              placeholder="Seu Nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full bg-[#1A1A1A] text-white rounded-lg pl-10 pr-4 py-3 border-none focus:ring-1 focus:ring-[#E4A853] focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Sua Senha"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-[#1A1A1A] text-white rounded-lg pl-10 pr-4 py-3 border-none focus:ring-1 focus:ring-[#E4A853] focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link href="/recuperar-senha" className="text-gray-400 hover:text-[#E4A853]">
              Recuperar minha senha
            </Link>
            <Link href="/cadastro" className="text-[#E4A853] hover:text-[#c89447]">
              Crie sua conta agora
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E4A853] text-black font-semibold py-3 px-4 rounded-lg hover:bg-[#c89447] transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
