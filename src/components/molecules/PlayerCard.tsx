import Image from 'next/image';

interface PlayerCardProps {
  name: string;
  position: string;
  number: string;
  club: string;
  imageUrl: string;
}

export function PlayerCard({ name, position, number, club, imageUrl }: PlayerCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden w-[300px]">
      <div className="relative h-[300px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 border-t border-[#E4A853]">
        <h3 className="text-[#E4A853] text-xl font-bold mb-2">{name}</h3>
        <div className="text-gray-400 text-sm">
          <p>Posição: {position} / Camisa: {number}</p>
          <p>Clube: {club}</p>
        </div>
      </div>
    </div>
  );
} 