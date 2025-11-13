// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "../ui-library/src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import uiPreset from "ui-library/tailwind-preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiPreset],
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../ui-library/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui-library/**/*.{js,ts,jsx,tsx}",
  ],
};
