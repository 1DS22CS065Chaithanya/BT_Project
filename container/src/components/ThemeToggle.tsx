
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save preference and broadcast event
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="px-3 py-1 rounded border bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
