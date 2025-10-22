import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ProductCard } from "ui-library";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:3001/products")
            .then((res) => res.json())
            .then((data) => {
            console.log("Fetched products:", data);
            setProducts(data);
        })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);
    function getCurrentTheme() {
        const root = document.documentElement;
        if (root.classList.contains("dark")) {
            return "dark";
        }
        else {
            return "light";
        }
    }
    const currentTheme = getCurrentTheme();
    console.log("Current theme is:", currentTheme);
    //  navigate to product-detail MFE
    const handleViewProduct = (id) => {
        window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
    };
    return (_jsxs("div", { style: { padding: 12 }, children: [_jsx("h2", { style: { marginTop: 0 }, className: "text-black dark:text-white", children: "Product List" }), _jsx("div", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                }, children: products.map((p) => (_jsx(ProductCard, { name: p.name, price: p.price, description: p.description, image: p.image, inStock: p.inStock, discount: p.discount, onClick: () => handleViewProduct(p.id) }, p.id))) })] }));
}
