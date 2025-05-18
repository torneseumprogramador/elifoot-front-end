import Image from 'next/image';

interface ClubCardProps {
  name: string;
  location: string;
  foundingDate: string;
  imageUrl: string;
}

export function ClubCard({ name, location, foundingDate, imageUrl }: ClubCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden w-[300px]">
      <div className="relative h-[300px] bg-[#262626] flex items-center justify-center p-8">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      
      <div className="p-4 border-t border-[#E4A853]">
        <h3 className="text-[#E4A853] text-xl font-bold mb-2">{name}</h3>
        <div className="text-gray-400 text-sm">
          <p>Localização: {location}</p>
          <p>Fundação: {foundingDate}</p>
        </div>
      </div>
    </div>
  );
} 