import { ReactNode, useState } from "react";

interface SlideshowProps {
  children: ReactNode[];
  itemsPerPage?: number;
}

export function Slideshow({ children, itemsPerPage = 4 }: SlideshowProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = children.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full">
      <div className="flex justify-center gap-6 mb-8">{visibleItems}</div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index
                  ? "bg-[#E4A853]"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
