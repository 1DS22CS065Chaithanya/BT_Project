import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from "./components/ProductCard";
export default function ProductList({ products = [], onSelectProduct }) {
    return (_jsxs("div", { style: { padding: 12 }, children: [_jsx("h2", { style: { marginTop: 0 }, children: "\uD83D\uDCE6 Product List" }), _jsx("div", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                }, children: products.map((p) => (_jsx(ProductCard, { name: p.name, price: p.price, description: p.description, image: p.image, inStock: p.inStock, discount: p.discount, onClick: () => onSelectProduct(p.id) }, p.id))) })] }));
}
