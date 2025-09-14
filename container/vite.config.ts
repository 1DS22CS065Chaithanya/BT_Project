import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        // 👇 must match the "name" in each remote's vite.config.ts
        productList: "http://localhost:3001/assets/remoteEntry.js",
        productDetail: "http://localhost:3002/assets/remoteEntry.js",
        adminPanel: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000, // container runs on port 3000
  },
  preview: { port: 3000 }
});
