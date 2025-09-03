import React from "react";
import ProductCard from "./components/ProductCard";
import images from "./assets";

import type { ProductCardProps } from "./components/ProductCard";

function App() {
  const products: ProductCardProps[] = [
    {
      name: "Wireless Headphones",
      price: 2999,
      description: "Noise-cancelling headphones with long battery life.",
      image: images["./Headphones.jpg"] as string,
      status: "default",
    },
    {
      name: "Smartwatch",
      price: 4999,
      description: "Track your health and fitness on the go.",
      image: images["./Smartwatch.jpg"] as string,
      status: "discounted",
    },
    {
      name: "Laptop",
      price: 59999,
      description: "High performance laptop for work and play.",
      image: images["./Laptop.jpg"] as string,
      status: "out-of-stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Product Dashboard
      </h1>

      {/* Responsive grid with reduced spacing and centered cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {products.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;
