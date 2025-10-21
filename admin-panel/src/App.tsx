
// import React from "react";
// import AdminPanel from "./AdminPanel";

// const demoProducts = [
//   {
//     id: "1",
//     name: "Wireless Headphones",
//     price: 120,
//     description: "High quality sound with noise cancellation.",
//     image: "http://localhost:3001/images/headphones.jpg",
//     inStock: true,
//     discount: 0
//   },
//   {
//     id: "2",
//     name: "Smartphone X",
//     price: 899,
//     description: "Latest model with amazing features.",
//     image: "http://localhost:3001/images/smartphone.jpg",
//     inStock: true,
//     discount: 10
//   }
// ];

// export default function App() {
//   const [products, setProducts] = React.useState(demoProducts);
//   const onAddProduct = (p: any) => setProducts((s) => [p, ...s]);
//   const onEditProduct = (p: any) => setProducts((s) => s.map((x) => (x.id === p.id ? p : x)));

//   return (
//     <div style={{ padding: 20 }}>
//       <h1 className="text-black dark:text-white">⚙️ Standalone Admin Panel</h1>
//       <AdminPanel products={products} onAddProduct={onAddProduct} onEditProduct={onEditProduct} />
//     </div>
//   );
// }
// import React from "react";
import AdminPanel from "./AdminPanel";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-black dark:text-white">⚙️ Standalone Admin Panel</h1>
      <AdminPanel />
    </div>
  );
}
