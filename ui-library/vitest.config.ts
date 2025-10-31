
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.join(dirname, "src/setupTests.ts"), 
    include: ["src/**/*.test.{ts,tsx}"], 
    exclude: [
      "node_modules",
      "dist",
      ".storybook",
      "**/*.stories.*", 
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
});
