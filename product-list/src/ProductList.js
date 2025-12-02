import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Card } from "ui-library";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    // Fetch products from backend
    useEffect(() => {
        fetch("http://127.0.0.1:3001/products")
            .then((res) => res.json())
            .then((data) => {
            console.log("Fetched products:", data);
            setProducts(data);
            setFiltered(data); //  Initially show all products
        })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);
    //  Search filter logic
    useEffect(() => {
        const result = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
        setFiltered(result);
    }, [search, products]);
    // Detect theme
    function getCurrentTheme() {
        const root = document.documentElement;
        return root.classList.contains("dark") ? "dark" : "light";
    }
    const currentTheme = getCurrentTheme();
    const handleViewProduct = (id) => {
        window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
    };
    return (_jsxs("div", { style: { padding: 12 }, children: [_jsx("h2", { className: "text-black dark:text-background", style: { marginTop: 0 }, children: "Product List" }), _jsx("input", { type: "text", placeholder: "Search products...", value: search, onChange: (e) => setSearch(e.target.value), className: "\n          border p-2 rounded w-full mb-4 \n          text-black \n          dark:bg-textSecondary dark:text-black dark:border-textSecondary\n        " }), _jsx("div", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                }, children: filtered.length > 0 ? (filtered.map((p) => (_jsx(Card, { name: p.name, price: p.price, description: p.description, image: p.image, inStock: p.inStock, discount: p.discount, onClick: () => handleViewProduct(p.id) }, p.id)))) : (_jsx("p", { className: "text-black dark:text-background", children: "No matching products found." })) })] }));
}
