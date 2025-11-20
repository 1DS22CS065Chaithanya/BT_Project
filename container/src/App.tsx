// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ThemeToggle from "./components/ThemeToggle";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
// };

// // lazy load federated remotes
// const ProductList = React.lazy(() => import("productList/ProductList"));
// const ProductDetail = React.lazy(() => import("productDetail/ProductDetail"));
// const AdminPanel = React.lazy(() => import("adminPanel/AdminPanel"));

// export default function App() {
//   const [products, setProducts] = React.useState<Product[]>([
//     {
//       id: "1",
//       name: "Wireless Headphones",
//       price: 120,
//       description: "High quality sound with noise cancellation.",
//       image: "http://localhost:3001/images/Headphones.jpg",
//       inStock: true,
//       discount: 0,
//     },
//     {
//       id: "2",
//       name: "Smartphone X",
//       price: 899,
//       description: "Latest model with amazing features.",
//       image: "http://localhost:3001/images/Mobile.webp",
//       inStock: true,
//       discount: 10,
//     },
//     {
//       id: "3",
//       name: "Gaming Laptop",
//       price: 1500,
//       description: "High performance gaming laptop.",
//       image: "http://localhost:3001/images/Laptop.jpg",
//       inStock: false,
//       discount: 0,
//     },
//   ]);

//   const [selectedId, setSelectedId] = React.useState<string | null>(null);

//   const onSelectProduct = (id: string) => setSelectedId(id);

//   const onAddProduct = (p: Product) => {
//     setProducts((s) => [p, ...s]);
//   };

//   const onEditProduct = (updated: Product) => {
//     setProducts((s) => s.map((x) => (x.id === updated.id ? updated : x)));
//     if (selectedId === updated.id) setSelectedId(updated.id); // refresh detail if needed
//   };

//   const selectedProduct = products.find((p) => p.id === selectedId) ?? null;

//   return (
//     <Router>
//       <div style={{ fontFamily: "system-ui,Segoe UI,Roboto,Helvetica,Arial", height: "100vh", display: "flex", flexDirection: "column" }}>
        
//         {/* Navbar */}
//         <header className="bg-primary text-background px-5 py-3 flex justify-between items-center">
//           <h2 style={{ margin: 0 }}>🛍️ Microfrontend Dashboard</h2>
//           <nav style={{ display: "flex", gap: "20px" }}>
//             <Link to="/products" className="text-background no-underline">Product List</Link>
//             {/* <Link to="/detail" className="text-white no-underline">Product Detail</Link> */}
//             <Link to="/admin" className="text-background no-underline">Admin Panel</Link>
//             <ThemeToggle /> 
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="flex-1 p-5 bg-gray-50 dark:bg-gray-900 text-black dark:text-white overflow-y-auto">
//           <Suspense fallback={<div className="text-black dark:text-background">Loading microfrontends...</div>}>
//             <Routes>
//               <Route path="/products" element={<ProductList products={products} onSelectProduct={onSelectProduct} />} />
//               <Route path="/detail" element={<ProductDetail product={selectedProduct} />} />
//               <Route path="/admin" element={<AdminPanel products={products} onAddProduct={onAddProduct} onEditProduct={onEditProduct} />} />
//               <Route path="*" element={<h2 className="text-black dark:background">Welcome to Product Dashboard.</h2>} />
//             </Routes>
//           </Suspense>
//         </main>
//       </div>
//     </Router>
//   );
// }
// container/src/App.tsx
import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ThemeToggle from "./components/ThemeToggle";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Lazy-loaded Microfrontends
const ProductList = React.lazy(() => import("productList/ProductList"));
const ProductDetail = React.lazy(() => import("productDetail/ProductDetail"));
const AdminPanel = React.lazy(() => import("adminPanel/AdminPanel"));

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number;
};

// -----------------------------------------------------
// NAVBAR
// -----------------------------------------------------
function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-primary text-background px-5 py-3 flex justify-between items-center">
      <h2 className="m-0">🛍️ Microfrontend Dashboard</h2>

      <nav className="flex gap-5 items-center">
        <Link to="/products" className="text-background no-underline">
          Product List
        </Link>

        <Link to="/admin" className="text-background no-underline">
          Admin Panel
        </Link>

        {/* Show Login/Signup if NOT logged in */}
        {!user ? (
          <>
            <Link to="/login" className="text-background no-underline">
              Login
            </Link>
            <Link to="/signup" className="text-background no-underline">
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="text-background underline cursor-pointer bg-transparent border-none"
          >
            Logout
          </button>
        )}

        <ThemeToggle />
      </nav>
    </header>
  );
}

// -----------------------------------------------------
// MAIN APP
// -----------------------------------------------------
export default function App() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selectedProduct =
    products.find((p) => p.id === selectedId) ?? null;

  // Fetch products from backend
  useEffect(() => {
    fetch("http://127.0.0.1:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products loaded:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 p-5 bg-gray-50 dark:bg-gray-900 text-black dark:text-white overflow-y-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/products"
                element={
                  <ProductList
                    products={products}
                    onSelectProduct={(id: string) => setSelectedId(id)}
                  />
                }
              />

              <Route
                path="/detail"
                element={<ProductDetail product={selectedProduct} />}
              />

              {/* PROTECTED ROUTE — Admin Only */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel
                      products={products}
                      onAddProduct={(p: Product) =>
                        setProducts((prev) => [p, ...prev])
                      }
                      onEditProduct={(p: Product) =>
                        setProducts((prev) =>
                          prev.map((x) => (x.id === p.id ? p : x))
                        )
                      }
                    />
                  </ProtectedRoute>
                }
              />

              {/* DEFAULT ROUTE */}
              <Route
                path="*"
                element={
                  <h2 className="text-black dark:text-white">
                    Welcome to Product Dashboard.
                  </h2>
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
