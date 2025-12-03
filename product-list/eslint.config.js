
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier";

export default tseslint.config([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
    },

    //  REGISTER ALL PLUGINS EXPLICITLY
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
       "react-refresh/only-export-components": "off",

      //  Enable formatting through ESLint
      "prettier/prettier": "warn",

      // AIRBNB-LIKE SAFETY RULES
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
      "eqeqeq": "error",
      "curly": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
