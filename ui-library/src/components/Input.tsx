
// import React from "react";
// import "./Input.css";

// type Props = {
//   label?: string;
//   type?: string;
//   placeholder?: string;
//   value: string | number;
//   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//   required?: boolean;
//   as?: "input" | "select";
//   options?: { value: string; label: string }[];
// };

// export default function Input({
//   label,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   required,
//   as = "input",
//   options,
// }: Props) {
//   return (
//     <div className="input-wrapper">
//       {label && <label className="input-label">{label}</label>}
//       {as === "select" ? (
//         <select
//           className="input-field"
//           value={String(value)}
//           onChange={onChange}
//           required={required}
//         >
//           {options?.map((opt) => (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           className="input-field"
//           type={type}
//           placeholder={placeholder}
//           value={String(value)}
//           onChange={onChange}
//           required={required}
//         />
//       )}
//     </div>
//   );
// }
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
        <label className="text-sm font-medium text-gray-900 dark:text-slate-100">
          {label}
        </label>
      )}

      {as === "select" ? (
        <select
          className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none bg-white text-gray-900 transition-all duration-200 focus:border-blue-600 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:focus:border-blue-500"
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
          className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none bg-white text-gray-900 transition-all duration-200 focus:border-blue-600 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:focus:border-blue-500"
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
