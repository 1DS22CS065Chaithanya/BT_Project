import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";
import "./index.css";

const demoProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 120,
    description: "High quality sound with noise cancellation.",
    image: "http://localhost:3001/images/Headphones.jpg",
    inStock: true,
    discount: 0,
  },
  {
    id: "2",
    name: "Smartphone X",
    price: 899,
    description: "Latest model with amazing features.",
    image: "http://localhost:3001/images/Mobile.webp",
    inStock: true,
    discount: 10,
  },
  {
    id: "3",
    name: "Gaming Laptop",
    price: 1500,
    description: "High performance gaming laptop.",
    image: "http://localhost:3001/images/Laptop.jpg",
    inStock: false,
    discount: 0,
  },
];

function Standalone() {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <div style={{ padding: 20 }}>
      <ProductList products={demoProducts} onSelectProduct={(id) => setSelected(id)} />
      {selected && <div style={{ marginTop: 20 }}>Selected product id: {selected}</div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Standalone />
  </React.StrictMode>
);