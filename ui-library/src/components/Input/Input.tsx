
import React from "react";

type Props = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  required?: boolean;
  as?: "input" | "select";
  options?: { value: string; label: string }[];
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  as = "input",
  options,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-textPrimary dark:text-onPrimary">
          {label}
        </label>
      )}

      {as === "select" ? (
        <select
          className="px-3 py-2 border border-background rounded-md text-sm outline-none bg-background text-textPrimary transition-all duration-200 focus:border-primary dark:text-black dark:text-onPrimary dark:border-textSecondary dark:focus:border-primary"
          value={String(value)}
          onChange={onChange}
          required={required}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
        data-testid="input"
          className="px-3 py-2 border border-background rounded-md text-sm outline-none bg-background text-black transition-all duration-200 focus:border-primary dark:bg-black dark:text-onPrimary dark:border-textSecondary dark:focus:border-primary"
          type={type}
          placeholder={placeholder}
          value={String(value)}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}
