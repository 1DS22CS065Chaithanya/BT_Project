import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productList",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/ProductList.tsx",
      },
      shared: ["react", "react-dom"],
    }),
//     federation({
//   name: "productList",
//   filename: "remoteEntry.js",
//   exposes: {
//     "./ProductList": "./src/ProductList.tsx"
//   },
//   shared: ["react", "react-dom"]
// }),
  ],
  build: {
    target: "esnext"
  },
  server: {
    port: 3001
  },
  preview: { port: 3001 }
});
