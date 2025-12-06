import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useEffect, useState } from "react";
// import { Card } from "ui-library";
// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
// };
// export default function ProductList() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState<Product[]>([]);
//   // Fetch products from backend
//   useEffect(() => {
//     fetch("http://127.0.0.1:3001/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched products:", data);
//         setProducts(data);
//         setFiltered(data); //  Initially show all products
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);
//   //  Search filter logic
//   useEffect(() => {
//     const result = products.filter((p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()),
//     );
//     setFiltered(result);
//   }, [search, products]);
//   // Detect theme
//   function getCurrentTheme() {
//     const root = document.documentElement;
//     return root.classList.contains("dark") ? "dark" : "light";
//   }
//   const currentTheme = getCurrentTheme();
//   const handleViewProduct = (id: string) => {
//     window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
//   };
//   return (
//     <div style={{ padding: 12 }}>
//       <h2 className="text-black dark:text-background" style={{ marginTop: 0 }}>
//         Product List
//       </h2>
//       {/*  SEARCH BAR UI */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="
//           border p-2 rounded w-full mb-4 
//           text-black 
//           dark:bg-textSecondary dark:text-black dark:border-textSecondary
//         "
//       />
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 12,
//         }}
//       >
//         {filtered.length > 0 ? (
//           filtered.map((p) => (
//             <Card
//               key={p.id}
//               name={p.name}
//               price={p.price}
//               description={p.description}
//               image={p.image}
//               inStock={p.inStock}
//               discount={p.discount}
//               onClick={() => handleViewProduct(p.id)}
//             />
//           ))
//         ) : (
//           <p className="text-black dark:text-background">
//             No matching products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState, useMemo } from "react";
import { Card } from "ui-library";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [maxPrice, setMaxPrice] = useState(5000);
    const [sort, setSort] = useState("default");
    // -------------------------
    // FETCH PRODUCTS
    // -------------------------
    useEffect(() => {
        fetch("http://127.0.0.1:3001/products")
            .then((res) => res.json())
            .then((data) => {
            setProducts(data);
        })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);
    // -------------------------
    // BUILD CATEGORY LIST
    // -------------------------
    const categories = useMemo(() => {
        const unique = new Set();
        products.forEach((p) => {
            if (p.category) {
                unique.add(p.category);
            }
        });
        return ["all", ...Array.from(unique)];
    }, [products]);
    // -------------------------
    // FILTER & SORT LOGIC
    // -------------------------
    const filtered = useMemo(() => {
        let result = [...products];
        // Search
        if (search.trim()) {
            result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
        }
        // Category
        // if (category !== "all") {
        //   result = result.filter((p) => p.category === category);
        // }
        if (category !== "all") {
            result = result.filter((p) => p.category?.toLowerCase().trim() === category.toLowerCase().trim());
        }
        // Price
        result = result.filter((p) => p.price <= maxPrice);
        // Sorting
        if (sort === "price-low") {
            result.sort((a, b) => a.price - b.price);
        }
        if (sort === "price-high") {
            result.sort((a, b) => b.price - a.price);
        }
        if (sort === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }
        return result;
    }, [search, category, maxPrice, sort, products]);
    // -------------------------
    // THEME
    // -------------------------
    function getCurrentTheme() {
        return document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
    }
    const currentTheme = getCurrentTheme();
    const handleViewProduct = (id) => {
        window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
    };
    return (_jsxs("div", { style: { padding: 12 }, children: [_jsx("h2", { className: "text-black dark:text-background", children: "Product List" }), _jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }, children: [_jsx("input", { placeholder: "Search products...", value: search, onChange: (e) => setSearch(e.target.value), className: "border p-2 rounded" }), _jsx("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "border p-2 rounded", children: categories.map((c) => (_jsx("option", { value: c, children: c.toUpperCase() }, c))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("label", { children: ["Max \u20B9", maxPrice] }), _jsx("input", { type: "range", min: 100, max: 10000, step: 100, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)) })] }), _jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "border p-2 rounded", children: [_jsx("option", { value: "default", children: "Sort By" }), _jsx("option", { value: "price-low", children: "Price: Low \u2192 High" }), _jsx("option", { value: "price-high", children: "Price: High \u2192 Low" }), _jsx("option", { value: "name", children: "Name (A \u2192 Z)" })] })] }), _jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 12 }, children: filtered.length > 0 ? (filtered.map((p) => (_jsx(Card, { name: p.name, price: p.price, description: p.description, image: p.image, discount: p.discount, inStock: p.inStock, onClick: () => handleViewProduct(p.id) }, p.id)))) : (_jsx("p", { className: "opacity-70", children: "No products match the filter." })) })] }));
}
