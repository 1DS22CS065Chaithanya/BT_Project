
// import React from "react";
// import "./Button.css";

// type ButtonProps = {
//   label: string;
//   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset";
//   className?: string;
// };

// export default function Button({
//   label,
//   onClick,
//   disabled = false,
//   type = "button",
//   className = "",
// }: ButtonProps) {
//   return (
//     <button
//       className={`custom-button ${className}`}
//       onClick={onClick}
//       disabled={disabled}
//       type={type}
//     >
//       {label}
//     </button>
//   );
// }
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
        bg-blue-600 text-white 
        hover:bg-blue-700 focus:outline-none active:bg-blue-800 
        disabled:opacity-60 disabled:cursor-not-allowed 
        dark:bg-blue-600 dark:hover:bg-blue-700 
        ${className}`}
    >
      {label}
    </button>
  );
}
