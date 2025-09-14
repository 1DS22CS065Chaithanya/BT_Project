import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ProductCard.css";
export default function ProductCard({ name, price, description, image, inStock = true, discount, onClick, }) {
    const finalPrice = discount ? price - (price * discount) / 100 : price;
    return (_jsxs("div", { className: "product-card", role: "button", onClick: onClick, children: [_jsx("div", { className: "product-image-wrap", children: _jsx("img", { src: image, alt: name, className: "product-image" }) }), _jsxs("div", { className: "product-body", children: [_jsx("h3", { className: "product-name", children: name }), _jsx("p", { className: "product-desc", children: description }), _jsxs("div", { className: "product-footer", children: [!inStock ? (_jsx("span", { className: "out-of-stock", children: "Out of stock" })) : discount ? (_jsxs("div", { className: "price", children: [_jsxs("span", { className: "old-price", children: ["$", price.toFixed(2)] }), _jsxs("span", { className: "discounted", children: ["$", finalPrice.toFixed(2)] })] })) : (_jsxs("div", { className: "price", children: ["$", price.toFixed(2)] })), _jsx("button", { className: "view-button", onClick: (e) => {
                                    e.stopPropagation();
                                    onClick?.();
                                }, "aria-label": `View ${name}`, children: "View" })] })] })] }));
}
