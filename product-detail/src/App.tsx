// // import React from "react";
// import ProductDetail from "./ProductDetail";

// const demo = {
//   id: "1",
//   name: "Wireless Headphones",
//   price: 120,
//   description: "High quality sound with noise cancellation.",
//   image: "http://localhost:3001/images/Headphones.jpg",
//   inStock: true,
//   discount: 0,
// };

// export default function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1 className="text-black dark:text-white">Product Detail App</h1>
//       <ProductDetail product={demo} />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number;
};

export default function App() {
  const [product, setProduct] = useState<Product | null>(null);
  function getThemeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get("theme"); // "light" or "dark"
  return theme || "light"; // default to "light" if not present
}

// Example usage
const currentTheme = getThemeFromUrl();
console.log("Current theme from URL:", currentTheme);

// Optional: apply it to <html>
if (currentTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


  useEffect(() => {
    // Read product ID from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) return;

    // Fetch product by ID from backend
    async function fetchProduct() {
      try {
        const res = await fetch(`http://127.0.0.1:3001/products/${id}`);
        const data = (await res.json()) as Product;
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* <h1 className="text-black dark:text-white">Product Detail App</h1> */}
      <ProductDetail product={product} />
    </div>
  );
}
