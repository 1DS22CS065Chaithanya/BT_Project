import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number;
};

// lazy load federated remotes
const ProductList = React.lazy(() => import("productList/ProductList"));
const ProductDetail = React.lazy(() => import("productDetail/ProductDetail"));
const AdminPanel = React.lazy(() => import("adminPanel/AdminPanel"));

export default function App() {
  const [products, setProducts] = React.useState<Product[]>([
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
  ]);

  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const onSelectProduct = (id: string) => setSelectedId(id);

  const onAddProduct = (p: Product) => {
    setProducts((s) => [p, ...s]);
  };

  const onEditProduct = (updated: Product) => {
    setProducts((s) => s.map((x) => (x.id === updated.id ? updated : x)));
    if (selectedId === updated.id) setSelectedId(updated.id); // refresh detail if needed
  };

  const selectedProduct = products.find((p) => p.id === selectedId) ?? null;

  return (
    <Router>
      <div style={{ fontFamily: "system-ui,Segoe UI,Roboto,Helvetica,Arial", height: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Navbar */}
        <header className="bg-primary text-background px-5 py-3 flex justify-between items-center">
          <h2 style={{ margin: 0 }}>🛍️ Microfrontend Dashboard</h2>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/products" className="text-background no-underline">Product List</Link>
            {/* <Link to="/detail" className="text-white no-underline">Product Detail</Link> */}
            <Link to="/admin" className="text-background no-underline">Admin Panel</Link>
            <ThemeToggle /> 
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 p-5 bg-gray-50 dark:bg-gray-900 text-black dark:text-white overflow-y-auto">
          <Suspense fallback={<div className="text-black dark:text-background">Loading microfrontends...</div>}>
            <Routes>
              <Route path="/products" element={<ProductList products={products} onSelectProduct={onSelectProduct} />} />
              <Route path="/detail" element={<ProductDetail product={selectedProduct} />} />
              <Route path="/admin" element={<AdminPanel products={products} onAddProduct={onAddProduct} onEditProduct={onEditProduct} />} />
              <Route path="*" element={<h2 className="text-black dark:background">Welcome to Product Dashboard.</h2>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
