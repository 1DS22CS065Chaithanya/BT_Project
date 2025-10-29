import React from "react";
type ButtonProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
};
export default function Button({ label, onClick, disabled, type, className, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
