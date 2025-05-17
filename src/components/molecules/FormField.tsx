import { ReactNode } from 'react';
import { Input } from '../atoms/Input';

interface FormFieldProps {
  label?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  error?: string;
  required?: boolean;
  bgColor?: string;
  border?: boolean;
}

export function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
  error,
  required,
  bgColor,
  border
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon={icon}
        required={required}
        bgColor={bgColor}
        border={border}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
} 