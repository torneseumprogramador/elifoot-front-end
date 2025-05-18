import Image from 'next/image';

interface PlayerCardProps {
  name: string;
  position: string;
  shirtNumber: number;
}

export function PlayerCard({ name, position, shirtNumber }: PlayerCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden w-[300px]">
      <div className="relative h-[300px]">
        <Image
          src="/jogador.svg"
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 border-t border-[#E4A853]">
        <h3 className="text-[#E4A853] text-xl font-bold mb-2">{name}</h3>
        <div className="text-gray-400 text-sm">
          <p>Posição: {position}</p>
          <p>Número: {shirtNumber}</p>
        </div>
      </div>
    </div>
  );
} 