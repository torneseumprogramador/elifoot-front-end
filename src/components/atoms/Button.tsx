import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "black" | "black-white" | "secondary";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "font-semibold py-3 px-4 rounded-lg transition-colors";
  const variantStyles = {
    primary: "bg-[#E4A853] text-black hover:bg-[#c89447]",
    secondary: "bg-black text-[#E4A853] border-2 border-[#E4A853] hover:bg-[#E4A853] hover:text-black",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black", 
    black: "bg-black text-white hover:bg-gray-700",
    "black-white": "bg-white text-black hover:bg-gray-700 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
