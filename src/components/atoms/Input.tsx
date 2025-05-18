import { ReactNode } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  required?: boolean;
  bgColor?: string;
  border?: boolean;
  textColor?: string;
}

export function Input({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  bgColor = "#1A1A1A",
  border = false,
  textColor = "text-white",
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{ backgroundColor: bgColor }}
        className={`w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-[10px] ${textColor} placeholder-gray-400 ${border ? "border border-gray-500" : ""} focus:ring-2 focus:ring-[#E4A853] focus:outline-none transition-all`}
      />
    </div>
  );
}
