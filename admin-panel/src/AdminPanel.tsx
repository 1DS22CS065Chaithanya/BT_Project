
import React from "react";
import { Modal, Button, Input } from "ui-library"; 
import './index.css';

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
  onAddProduct: (p: Product) => void;
  onEditProduct: (p: Product) => void;
};

export default function AdminPanel({ products = [], onAddProduct, onEditProduct }: Props) {
  const [editing, setEditing] = React.useState<Product | null>(null);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
    description: "",
    image: "",
    inStock: "true",
    discount: "0",
  });

  const [modal, setModal] = React.useState({
    isOpen: false,
    title: "",
    message: "",
  });

  React.useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name,
        price: String(editing.price),
        description: editing.description,
        image: editing.image,
        inStock: editing.inStock ? "true" : "false",
        discount: String(editing.discount ?? 0),
      });
    } else {
      setForm({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });
    }
  }, [editing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const p: Product = {
      id: editing ? editing.id : String(Date.now()),
      name: form.name,
      price: Number(form.price || 0),
      description: form.description,
      image: form.image,
      inStock: form.inStock === "true",
      discount: Number(form.discount || 0),
    };

    if (editing) {
      onEditProduct(p);
      setEditing(null);
      setModal({ isOpen: true, title: "Product Updated", message: `${p.name} was updated.` });
    } else {
      onAddProduct(p);
      setModal({ isOpen: true, title: "Product Added", message: `${p.name} was added.` });
    }

    setForm({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });
  }

  return (
    <div style={{ padding: 12 }}>
      <h2>Admin Panel</h2>

      <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
        <form
          onSubmit={handleSubmit}
          style={{ minWidth: 320, display: "flex", flexDirection: "column", gap: 12 }}
        >
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <Input
            placeholder="Image URL (absolute)"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
          />
          <Input
            placeholder="Short description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <label>
            In stock:
            <select
              value={form.inStock}
              onChange={(e) => setForm({ ...form, inStock: e.target.value })}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <Input
            placeholder="Discount (%)"
            type="number"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
          />

          <div style={{ display: "flex", gap: 8 }}>
            <Button type="submit" label={editing ? "Save Changes" : "Add Product"} />
            {editing && <Button type="button" label="Cancel" onClick={() => setEditing(null)} />}
          </div>
        </form>

        <div style={{ flex: 1 }}>
          <h3 className="text-black dark:text-white">Existing products</h3>
          <ul style={{ paddingLeft: 16 }}>
            {products.map((p) => (
              <li key={p.id} style={{ marginBottom: 8 }}>
                <strong>{p.name}</strong> — ${p.price}{" "}
                <Button type="button" label="Edit" onClick={() => setEditing(p)} />
              </li>
            ))}
          </ul>
          {/* <p style={{ color: "#666", fontSize: 13 }}>
            To use local images, put files in{" "}
            <code>product-list/public/images/</code> and set image to{" "}
            <code>http://localhost:3001/images/your-file.jpg</code>
          </p> */}
        </div>
      </div>

      
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </div>
  );
}
