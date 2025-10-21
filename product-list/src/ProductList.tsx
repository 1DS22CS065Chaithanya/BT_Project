// import React, { useEffect, useState } from "react";
// import { ProductCard } from "ui-library";

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
// };

// type Props = {
//   // onSelectProduct: (id: string) => void;
//   onSelectProduct: (product: Product) => void;
// };

// export default function ProductList({ onSelectProduct }: Props) {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:3001/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched products:", data);
//         setProducts(data);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div style={{ padding: 12 }}>
//       <h2 style={{ marginTop: 0 }} className="text-black dark:text-white">
//         Product List
//       </h2>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 12,
//         }}
//       >
//         {products.map((p) => (
//           <ProductCard
//             key={p.id}
//             name={p.name}
//             price={p.price}
//             description={p.description}
//             image={p.image}
//             inStock={p.inStock}
//             discount={p.discount}
//             onClick={() => onSelectProduct(p)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { ProductCard } from "ui-library";

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

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  // Get current theme based on <html> class
function getCurrentTheme() {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    return "dark";
  } else {
    return "light";
  }
}

// Example usage
const currentTheme = getCurrentTheme();
console.log("Current theme is:", currentTheme);

  // 👉 navigate to product-detail MFE
  const handleViewProduct = (id: string) => {
    // window.location.href = `http://localhost:3002/products/${id}`;
    // window.location.href = `http://localhost:3002/detail/?id=${id}`;
    window.location.href = `http://localhost:3002/detail/?id=${id}&theme=${currentTheme}`;
  };

  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginTop: 0 }} className="text-black dark:text-white">
        Product List
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            description={p.description}
            image={p.image}
            inStock={p.inStock}
            discount={p.discount}
            onClick={() => handleViewProduct(p.id)}

          />
        ))}
      </div>
    </div>
  );
}
