import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productDetail",
      filename: "remoteEntry.js",
      shared: ["react", "react-dom","react-router-dom","ui-library"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3002, 
  },
  preview: { port: 3002 }
});
