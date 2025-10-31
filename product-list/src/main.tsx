

import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";
import "ui-library/dist/index.css";
import "./index.css";

function Standalone() {
  return (
    <div style={{ padding: 20 }}>
      <ProductList />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Standalone />
  </React.StrictMode>
);
