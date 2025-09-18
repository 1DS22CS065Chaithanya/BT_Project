import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productDetail",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductDetail": "./src/ProductDetail.tsx", // 👈 expose ProductDetail
      },
      shared: ["react", "react-dom","react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3002, // 👈 runs on port 3002
  },
  preview: { port: 3002 }
});
