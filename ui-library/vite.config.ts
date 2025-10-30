// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "src/index.ts"),
//       name: "ui-library",
//       fileName: (format) => `ui-library.${format}.js`,
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"], 
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "src/index.ts"),
//       name: "ui-library",
//       fileName: (format) => `ui-library.${format}.js`
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM"
//         }
//       }
//     }
//   }
// });
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
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
});
