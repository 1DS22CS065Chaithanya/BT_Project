import React, { useMemo } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock?: boolean;
};

export default function ProductAnalytics({
  products,
}: {
  products: Product[];
}) {
  const totalProducts = products.length;

  const inStockCount = useMemo(
    () => products.filter((p) => p.inStock).length,
    [products],
  );

  const outOfStockCount = totalProducts - inStockCount;

  const mostExpensive = useMemo(() => {
    if (!products.length) {
      return null;
    }
    return products.reduce((max, p) => (p.price > max.price ? p : max));
  }, [products]);

  const cheapest = useMemo(() => {
    if (!products.length) {
      return null;
    }
    return products.reduce((min, p) => (p.price < min.price ? p : min));
  }, [products]);

  const averagePrice = useMemo(() => {
    if (!products.length) {
      return 0;
    }
    const total = products.reduce((sum, p) => sum + p.price, 0);
    return Math.round(total / products.length);
  }, [products]);

  const categoryStats = useMemo(() => {
    const map: Record<string, number> = {};
    products.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [products]);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>📊 Product Analytics</h2>

      {/*  METRICS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <Stat label="Total Products" value={totalProducts} />
        <Stat label="In Stock" value={inStockCount} />
        <Stat label="Out of Stock" value={outOfStockCount} />
        <Stat label="Average Price" value={`₹${averagePrice}`} />

        {mostExpensive && (
          <Stat
            label="Most Expensive"
            value={`${mostExpensive.name} (₹${mostExpensive.price})`}
          />
        )}

        {cheapest && (
          <Stat
            label="Cheapest"
            value={`${cheapest.name} (₹${cheapest.price})`}
          />
        )}
      </div>

      {/*  CATEGORY LIST */}
      <h3>Products Per Category</h3>
      <ul>
        {Object.entries(categoryStats).map(([cat, count]) => (
          <li key={cat}>
            {cat} → {count} product(s)
          </li>
        ))}
      </ul>
    </div>
  );
}

// SMALL REUSABLE METRIC BOX
function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #ccc",
        borderRadius: 8,
        background: "#f9fafb",
      }}
    >
      <strong>{label}</strong>
      <div style={{ fontSize: 18, marginTop: 6 }}>{value}</div>
    </div>
  );
}
