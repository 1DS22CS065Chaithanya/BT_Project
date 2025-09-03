<!--# React + TypeScript + Vite

#This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are availab

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```-->
-> 📊 Product Dashboard

A Product Dashboard built with React,TypeScript,Vite, and Tailwind CSS.  
This project also uses Storybook for isolated UI component development.

->Features

- ⚡ Vite for lightning-fast builds and HMR.
- 🎨 Tailwind CSS for modern, responsive UI styling.
- 🧩 Storybook for developing and testing components in isolation.
- 📂 Clean and modular folder structure.

-> Tech Stack

- React - UI library
- TypeScript - Type-safe development
- Vite - Build tool
- Tailwind CSS - Styling framework
- Storybook - UI component playground
- Vitest - Unit testing
- ESLint - Code linting and style guide enforcement

->  ⚙ Installation

Follow these steps to run the project locally:

1. Clone the repository
   bash:
   git clone https://github.com/1DS22CS065Chaithanya/BT_Project.git
   
   cd product-dashboard

3. Install dependencies:
   npm install

4. Start development server:
   npm run dev

5. Run Storybook:
   npm run storybook

