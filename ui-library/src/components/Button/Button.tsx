
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  label,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-sm font-medium 
        bg-primary text-white 
        hover:bg-primaryHover focus:outline-none active:bg-primaryHover
        disabled:opacity-60 disabled:cursor-not-allowed 
        dark:bg-primary dark:hover:bg-primaryHover
        ${className}`}
    >
      {label}
    </button>
  );
}
