import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | Elifoot",
  description: "A página que você está procurando não existe.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Elifoot Logo"
            width={180}
            height={50}
            priority
            className="mb-16"
          />

          <h1 className="text-8xl font-bold mb-4 text-[#E4A853]">404</h1>
          <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-gray-400 text-lg mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>

          <Link href="/">
            <Button variant="primary" className="w-[250px] rounded-[10px]">
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
