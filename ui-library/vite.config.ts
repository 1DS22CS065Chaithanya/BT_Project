/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),

    // 👇 This plugin copies your CSS into the final build output
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css", // Tailwind + global CSS
          dest: ".", // copy directly into dist/
        },
      ],
    }),
  ],
  

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-library",
      fileName: (format) => `ui-library.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
     include: ["src/**/*.test.{ts,tsx}"],
     exclude: ["**/*.stories.tsx"], 
      setupFiles: "./src/setupTests.ts",
  },
});
// import { defineConfig } from "vitest/config";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.ts",

//     // ✅ Only run .test.tsx or .test.ts
//     include: ["src/**/*.test.{ts,tsx}"],

//     // 🚫 Ignore all Storybook files
//     exclude: [
//       "node_modules",
//       "dist",
//       "**/*.stories.*",
//       ".storybook",
//     ],
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });
