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
import React, { useEffect, useState, useMemo } from "react";
import { Card } from "ui-library";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  inStock?: boolean;
  discount?: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState<number>(5000);
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
    const unique = new Set<string>();
    products.forEach((p) => {
      if (p.category) {unique.add(p.category);}
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
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category
    // if (category !== "all") {
    //   result = result.filter((p) => p.category === category);
    // }

    if (category !== "all") {
      result = result.filter(
        (p) => p.category?.toLowerCase().trim() === category.toLowerCase().trim() );
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

  const handleViewProduct = (id: string) => {
    window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
  };

  return (
    <div style={{ padding: 12 }}>
      <h2 className="text-black dark:text-background">Product List</h2>

      {/* ✅ FILTER BAR */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>

        {/* SEARCH */}
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.toUpperCase()}
            </option>
          ))}
        </select>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <label>Max ₹{maxPrice}</label>
          <input
            type="range"
            min={100}
            max={10000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="name">Name (A → Z)</option>
        </select>
      </div>

      {/* ✅ PRODUCT GRID */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              price={p.price}
              description={p.description}
              image={p.image}
              discount={p.discount}
              inStock={p.inStock}
              onClick={() => handleViewProduct(p.id)}
            />
          ))
        ) : (
          <p className="opacity-70">No products match the filter.</p>
        )}
      </div>
    </div>
  );
}
