
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <header className="bg-primary text-onPrimary dark:bg-gray-800 dark:text-white p-4 flex justify-between items-center transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">🛍️ Microfrontend Dashboard</span>
      </div>

      <nav className="flex items-center space-x-6">
        <Link to="/products" className="no-underline hover:underline">
          Product List
        </Link>
        <Link to="/admin" className="no-underline hover:underline">
          Admin Panel
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
