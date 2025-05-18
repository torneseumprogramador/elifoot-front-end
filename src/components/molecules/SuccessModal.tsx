import Image from "next/image";
import { Button } from "../atoms/Button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewRegistration: () => void;
  onBack: () => void;
}

export function SuccessModal({
  isOpen,
  onClose,
  onNewRegistration,
  onBack,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-2xl  max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.svg"
            alt="Elifoot Logo"
            width={180}
            height={50}
            priority
            className="mb-8"
          />

          <div className="mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-[#E4A853] text-2xl font-bold mb-2">
              Cadastro efetuado com sucesso!
            </h2>
            <p className="text-gray-400">Escolha seu próximo destino</p>
          </div>

          <div className="flex flex-col w-full gap-4">
            <Button
              onClick={onNewRegistration}
              variant="secondary"
              className="w-full"
            >
              Novo Cadastro
            </Button>

            <Button onClick={onBack} variant="primary" className="w-full">
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
