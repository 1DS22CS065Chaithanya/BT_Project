
import React, { useEffect, useState } from "react";
import { Card } from "ui-library";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState(""); 
  const [filtered, setFiltered] = useState<Product[]>([]); 

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
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, products]);

  // Detect theme
  function getCurrentTheme() {
    const root = document.documentElement;
    return root.classList.contains("dark") ? "dark" : "light";
  }

  const currentTheme = getCurrentTheme();

  const handleViewProduct = (id: string) => {
    window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
  };

  return (
    <div style={{ padding: 12 }}>
      <h2 className="text-black dark:text-background" style={{ marginTop: 0 }}>
        Product List
      </h2>

      {/*  SEARCH BAR UI */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          border p-2 rounded w-full mb-4 
          text-black 
          dark:bg-textSecondary dark:text-black dark:border-textSecondary
        "
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              price={p.price}
              description={p.description}
              image={p.image}
              inStock={p.inStock}
              discount={p.discount}
              onClick={() => handleViewProduct(p.id)}
            />
          ))
        ) : (
          <p className="text-black dark:text-background">No matching products found.</p>
        )}
      </div>
    </div>
  );
}
