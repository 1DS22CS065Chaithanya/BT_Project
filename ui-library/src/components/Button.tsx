import React from "react";
import "./Button.css";

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
}: ButtonProps) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
