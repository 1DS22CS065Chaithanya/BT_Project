import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productList",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/ProductList.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  // resolve: {
  //   alias: {
  //     "ui-library": path.resolve(__dirname, "../ui-library/dist/ui-library.es.js"),
  //   },
  // },
  server: {
    port: 3001,
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
  },
  build: {
    target: "esnext",
  },
  preview: { port: 3001 },
});
