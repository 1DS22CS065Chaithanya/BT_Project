import React from "react";
import { ProductCard } from "ui-library";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number;
};

type Props = {
  products: Product[];                     
  onSelectProduct: (id: string) => void;   
};

export default function ProductList({ products = [], onSelectProduct }: Props) {
  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ marginTop: 0 }}>📦 Product List</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
      }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            description={p.description}
            image={p.image}
            inStock={p.inStock}
            discount={p.discount}
            onClick={() => onSelectProduct(p.id)}
          />
        ))}
      </div>
    </div>
  );
}