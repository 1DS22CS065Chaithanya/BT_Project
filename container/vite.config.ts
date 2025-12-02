import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        productList: "http://localhost:3001/assets/remoteEntry.js",
        productDetail: "http://localhost:3002/assets/remoteEntry.js",
        adminPanel: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "ui-library"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
  preview: { port: 3000 },
});
