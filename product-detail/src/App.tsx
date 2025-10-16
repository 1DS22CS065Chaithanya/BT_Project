// import React from "react";
import ProductDetail from "./ProductDetail";

const demo = {
  id: "1",
  name: "Wireless Headphones",
  price: 120,
  description: "High quality sound with noise cancellation.",
  image: "http://localhost:3001/images/Headphones.jpg",
  inStock: true,
  discount: 0,
};

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-black dark:text-white">Product Detail App</h1>
      <ProductDetail product={demo} />
    </div>
  );
}
