import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../atoms/Button';

export function Header() {
  return (
    <header className="w-full bg-black py-4 px-8 flex items-center justify-between border-b border-gray-800">
      <Link href="/dash">
        <Image
          src="/logo.svg"
          alt="Elifoot Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav className="flex items-center gap-8">
        <Link 
          href="/dash/estadios/cadastro" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          Cadastrar Estádio
        </Link>
        <Link 
          href="/dash/clubes/cadastro" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          Cadastrar Clube
        </Link>
        <Link 
          href="/dash/jogadores/cadastro" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          Cadastrar Jogador
        </Link>
      </nav>

      <Button
        variant="black-white"
        onClick={() => {/* TODO: Implement logout */}}
        className="rounded-full px-8"
      >
        Sair
      </Button>
    </header>
  );
} 