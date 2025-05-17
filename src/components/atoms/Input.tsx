import { ReactNode } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  required?: boolean;
}

export function Input({ type, placeholder, value, onChange, icon, required = false }: InputProps) {
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
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg bg-[#1A1A1A] text-white border-none focus:ring-1 focus:ring-[#E4A853] focus:outline-none`}
      />
    </div>
  );
} 