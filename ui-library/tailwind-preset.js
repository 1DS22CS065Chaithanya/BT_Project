// ui-library/tailwind-preset.js

/** @type {import('tailwindcss').Config} */
const preset = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 🎨 Brand Colors
        primary: "#0ea5a4",        // teal-500
        primaryHover: "#0d9488",   // teal-600
        secondary: "#f59e0b",      // amber-500s
        accent: "#ef4444",         // red-500

        // 🧱 Background / Surface
        background: "#ffffff",
        surface: "#f3f4f6",        // gray-100

        // ✍️ Text Colors
        onPrimary: "#ffffff",
        textPrimary: "#1f2937",    // gray-800
        textSecondary: "#6b7280",
        black:"#000000",  // gray-500

        // ⚠️ Status
        success: "#22c55e",
        warning: "#eab308",
        error: "#ef4444",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default preset;
