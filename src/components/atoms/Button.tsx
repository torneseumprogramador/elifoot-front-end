import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "black" | "black-white";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-semibold py-3 px-4 rounded-lg transition-colors";
  const variantStyles = {
    primary: "bg-[#E4A853] text-black hover:bg-[#c89447]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black", 
    black: "bg-black text-white hover:bg-gray-700",
    "black-white": "bg-white text-black hover:bg-gray-700 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
