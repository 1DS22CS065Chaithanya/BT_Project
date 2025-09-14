import React, { Suspense } from "react";

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
  // Initial products live here in the container (single source of truth).
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
    <div style={{ padding: 20, fontFamily: "system-ui,Segoe UI,Roboto,Helvetica,Arial" }}>
      <h1 style={{ marginTop: 0 }}>🛍️ Microfrontend Dashboard (Container)</h1>

      <Suspense fallback={<div>Loading microfrontends...</div>}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <div style={{ minHeight: 200 }}>
            {/* Product list receives products and a selection handler */}
            <ProductList products={products} onSelectProduct={onSelectProduct} />
          </div>

          <div style={{ minHeight: 200 }}>
            {/* Product detail receives the selected product object */}
            <ProductDetail product={selectedProduct} />
          </div>

          <div style={{ gridColumn: "1 / -1", marginTop: 12 }}>
            {/* Admin panel receives products + add/edit handlers */}
            <AdminPanel products={products} onAddProduct={onAddProduct} onEditProduct={onEditProduct} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
