import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "ui-library/dist/ui-library.css";
import './index.css'; // Tailwind CSS
const params = new URLSearchParams(window.location.search);
const theme = params.get("theme");
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

