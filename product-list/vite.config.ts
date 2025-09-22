// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "productList",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./ProductList": "./src/ProductList.tsx",
//       },
//       shared: ["react", "react-dom","react-router-dom","ui-library"],
//     }),
// //     federation({
// //   name: "productList",
// //   filename: "remoteEntry.js",
// //   exposes: {
// //     "./ProductList": "./src/ProductList.tsx"
// //   },
// //   shared: ["react", "react-dom"]
// // }),
//   ],
  
//   build: {
//     target: "esnext"
//   },
//   server: {
//     port: 3001
//   },
//   preview: { port: 3001 }
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import * as path from "path";
import { fileURLToPath } from "url"; // ✅ works now after installing @types/node

// Fix for __dirname in ES modules
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
  resolve: {
    alias: {
      "ui-library": path.resolve(__dirname, "../ui-library/src"),
    },
  },
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
