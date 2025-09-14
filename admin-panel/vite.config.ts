// // import { defineConfig } from "vite";
// // import react from "@vitejs/plugin-react";
// // import federation from "@originjs/vite-plugin-federation";

// // export default defineConfig({
// //   plugins: [
// //     react(),
// //     federation({
// //       name: "adminPanel",
// //       filename: "remoteEntry.js",
// //       exposes: {
// //         "./AdminPanel": "./src/AdminPanel.tsx", // 👈 expose AdminPanel
// //       },
// //       shared: ["react", "react-dom"],
// //     }),
// //   ],
// //   build: {
// //     target: "esnext",
// //   },
// //   server: {
// //     port: 3003, // 👈 runs on port 3003
// //   },
// // });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "adminPanel",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./AdminPanel": "./src/AdminPanel.tsx"
//       },
//       shared: ["react", "react-dom"]
//     })
//   ],
//   server: { port: 3003 },
//   build: { target: "esnext", modulePreload: false, minify: false, cssCodeSplit: false },
//   preview: { port: 3003 }
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "adminPanel",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminPanel": "./src/AdminPanel.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 3003 },
  build: { target: "esnext" },
  preview: { port: 3003 }
});
