import Image from 'next/image';
import { getClubImage } from '@/helpers/imageHelper';
import { useState, useEffect } from 'react';

interface ClubCardProps {
  name: string;
  founded: string;
}

export function ClubCard({ name, founded }: ClubCardProps) {
  const [imageSrc, setImageSrc] = useState<string>('/images/default-club.png');

  useEffect(() => {
    getClubImage(name).then(setImageSrc);
  }, [name]);

  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden w-[300px]">
      <div className="relative h-[300px] bg-[#262626] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      
      <div className="p-4 border-t border-[#E4A853]">
        <h3 className="text-[#E4A853] text-xl font-bold mb-2">{name}</h3>
        <div className="text-gray-400 text-sm">
          <p>Fundação: {founded}</p>
        </div>
      </div>
    </div>
  );
} 