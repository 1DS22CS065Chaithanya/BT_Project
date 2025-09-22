import React from "react";
type Props = {
    label?: string;
    type?: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    required?: boolean;
    as?: "input" | "select";
    options?: {
        value: string;
        label: string;
    }[];
};
export default function Input({ label, type, placeholder, value, onChange, required, as, options, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
