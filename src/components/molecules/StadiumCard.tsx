import Image from 'next/image';
import { getStadiumImage } from '@/helpers/imageHelper';
import { useState, useEffect } from 'react';

interface StadiumCardProps {
  name: string;
  city: string;
  capacity: number;
}

export function StadiumCard({ name, city, capacity }: StadiumCardProps) {
  const [imageSrc, setImageSrc] = useState<string>('/images/default-stadium.png');

  useEffect(() => {
    getStadiumImage(name).then(setImageSrc);
  }, [name]);

  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden w-[300px]">
      <div className="relative h-[300px]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 border-t border-[#E4A853]">
        <h3 className="text-[#E4A853] text-xl font-bold mb-2">{name}</h3>
        <div className="text-gray-400 text-sm">
          <p>Cidade: {city}</p>
          <p>Capacidade: {capacity.toLocaleString()} pessoas</p>
        </div>
      </div>
    </div>
  );
} 