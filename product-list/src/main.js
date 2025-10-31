import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";
import "ui-library/dist/index.css";
import "./index.css";
function Standalone() {
    return (_jsx("div", { style: { padding: 20 }, children: _jsx(ProductList, {}) }));
}
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Standalone, {}) }));
