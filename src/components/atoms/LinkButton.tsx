import { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "black" | "black-white";
  onClick?: () => void;
  className?: string;
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: LinkButtonProps) {
  const baseStyles = "font-semibold py-3 px-4 rounded-lg transition-colors text-center";
  const variantStyles = {
    primary: "bg-[#E4A853] text-black hover:bg-[#c89447]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black", 
    black: "bg-black text-white hover:bg-gray-700",
    "black-white": "bg-white text-black hover:bg-gray-700 hover:text-white",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
