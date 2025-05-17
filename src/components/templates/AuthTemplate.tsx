import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../atoms/Button';

interface AuthTemplateProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showLoginButton?: boolean;
  showRegisterLink?: boolean;
  showForgotPasswordLink?: boolean;
}

export function AuthTemplate({
  children,
  title,
  subtitle,
  showLoginButton = false,
  showRegisterLink = false,
  showForgotPasswordLink = false
}: AuthTemplateProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Black */}
      <div className="w-1/2 bg-black p-12 flex flex-col justify-between pt-[15%]">
        <div className="flex flex-col items-center text-center">
          <div className="justify-center">
            <Image
              src="/logo.svg"
              alt="Elifoot Logo"
              width={180}
              height={50}
              className="mb-16"
            />
            <h1 className="text-white text-5xl font-bold mb-4 text-left">
              Bem-vindo<br />de volta!
            </h1>
            <p className="text-white text-xl mb-8 text-left">
              Acesse sua conta agora mesmo.
            </p>
          </div>
          
          {showLoginButton && (
            <Link href="/" className="w-[290px] mb-4">
              <Button variant="outline" className="w-full">
                ENTRAR
              </Button>
            </Link>
          )}

          {showForgotPasswordLink && (
            <Link
              href="/esqueci-senha"
              className="text-white text-sm hover:underline"
            >
              Esqueci minha senha.
            </Link>
          )}

          {showRegisterLink && (
            <Link
              href="/cadastro"
              className="text-white text-sm hover:underline"
            >
              Criar conta.
            </Link>
          )}
        </div>
      </div>

      {/* Right Side - White */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-4xl font-bold mb-2 text-center text-black">
            {title}
          </h2>
          <p className="text-gray-400 mb-8 text-center">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
} 