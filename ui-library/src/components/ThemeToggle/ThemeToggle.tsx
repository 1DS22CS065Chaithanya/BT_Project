
import React from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-onPrimary text-primary px-3 py-1 rounded-md hover:opacity-80 dark:bg-gray-200 dark:text-gray-800 transition-colors duration-300"
    >
      {theme === "light" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
