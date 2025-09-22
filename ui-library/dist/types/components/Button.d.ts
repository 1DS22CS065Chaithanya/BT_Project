import React from "react";
import "./Button.css";
type ButtonProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
};
export default function Button({ label, onClick, disabled, type, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
