import { ReactNode } from "react";
import Image from "next/image";

interface HomeTemplateProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function HomeTemplate({ children, title, subtitle }: HomeTemplateProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Elifoot Logo"
            width={180}
            height={50}
            priority
            className="mb-16"
          />

          <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>
          <p className="text-gray-400 text-sm text-center">{subtitle}</p>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
