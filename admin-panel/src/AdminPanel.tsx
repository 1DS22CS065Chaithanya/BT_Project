// import React from "react";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
// };

// type Props = {
//   products: Product[];                           // from container
//   onAddProduct: (p: Product) => void;            // container updates state
//   onEditProduct: (p: Product) => void;
// };

// export default function AdminPanel({ products = [], onAddProduct, onEditProduct }: Props) {
//   const [editing, setEditing] = React.useState<Product | null>(null);
//   const [form, setForm] = React.useState({
//     name: "",
//     price: "",
//     description: "",
//     image: "",
//     inStock: "true",
//     discount: "0",
//   });

//   React.useEffect(() => {
//     if (editing) {
//       setForm({
//         name: editing.name,
//         price: String(editing.price),
//         description: editing.description,
//         image: editing.image,
//         inStock: editing.inStock ? "true" : "false",
//         discount: String(editing.discount ?? 0),
//       });
//     } else {
//       setForm({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });
//     }
//   }, [editing]);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const p: Product = {
//       id: editing ? editing.id : String(Date.now()),
//       name: form.name,
//       price: Number(form.price || 0),
//       description: form.description,
//       image: form.image,
//       inStock: form.inStock === "true",
//       discount: Number(form.discount || 0),
//     };
//     if (editing) {
//       onEditProduct(p);
//       setEditing(null);
//     } else {
//       onAddProduct(p);
//     }
//     setForm({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });
//   }

//   return (
//     <div style={{ padding: 12 }}>
//       <h2>⚙️ Admin Panel</h2>

//       <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
//         <form onSubmit={handleSubmit} style={{ minWidth: 320, display: "flex", flexDirection: "column", gap: 8 }}>
//           <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
//           <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required type="number" />
//           <input placeholder="Image URL (absolute)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
//           <input placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
//           <label>
//             In stock:
//             <select value={form.inStock} onChange={(e) => setForm({ ...form, inStock: e.target.value })}>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </label>
//           <input placeholder="Discount (%)" value={form.discount} onChange={(e) => setForm({ ...form, discount: e.target.value })} type="number" />
//           <div style={{ display: "flex", gap: 8 }}>
//             <button type="submit" style={{ background: "#0066ff", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 6 }}>
//               {editing ? "Save Changes" : "Add Product"}
//             </button>
//             {editing && (
//               <button type="button" onClick={() => setEditing(null)} style={{ padding: "8px 12px" }}>Cancel</button>
//             )}
//           </div>
//         </form>

//         <div style={{ flex: 1 }}>
//           <h3>Existing products</h3>
//           <ul style={{ paddingLeft: 16 }}>
//             {products.map((p) => (
//               <li key={p.id} style={{ marginBottom: 8 }}>
//                 <strong>{p.name}</strong> — ${p.price}{" "}
//                 <button style={{ marginLeft: 8 }} onClick={() => setEditing(p)}>Edit</button>
//               </li>
//             ))}
//           </ul>
//           <p style={{ color: "#666", fontSize: 13 }}>
//             To use local images, place them in <code>product-list/public/images/</code> and set Image URL to:
//             <code>http://localhost:3001/images/your-file.jpg</code>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

type Product = { id: string; name: string; price: number; description: string; image: string; inStock?: boolean; discount?: number; };
type Props = { products: Product[]; onAddProduct: (p: Product) => void; onEditProduct: (p: Product) => void; };

export default function AdminPanel({ products = [], onAddProduct, onEditProduct }: Props) {
  const [editing, setEditing] = React.useState<Product | null>(null);
  const [form, setForm] = React.useState({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });

  React.useEffect(() => {
    if (editing) {
      setForm({ name: editing.name, price: String(editing.price), description: editing.description, image: editing.image, inStock: editing.inStock ? "true" : "false", discount: String(editing.discount ?? 0) });
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
      discount: Number(form.discount || 0)
    };
    if (editing) { onEditProduct(p); setEditing(null); } else { onAddProduct(p); }
    setForm({ name: "", price: "", description: "", image: "", inStock: "true", discount: "0" });
  }

  return (
    <div style={{ padding: 12 }}>
      <h2>⚙️ Admin Panel</h2>
      <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
        <form onSubmit={handleSubmit} style={{ minWidth: 320, display: "flex", flexDirection: "column", gap: 8 }}>
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required type="number" />
          <input placeholder="Image URL (absolute)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
          <input placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <label>In stock:
            <select value={form.inStock} onChange={(e) => setForm({ ...form, inStock: e.target.value })}><option value="true">Yes</option><option value="false">No</option></select>
          </label>
          <input placeholder="Discount (%)" value={form.discount} onChange={(e) => setForm({ ...form, discount: e.target.value })} type="number" />
          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit" style={{ background: "#0066ff", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 6 }}>{editing ? "Save Changes" : "Add Product"}</button>
            {editing && <button type="button" onClick={() => setEditing(null)} style={{ padding: "8px 12px" }}>Cancel</button>}
          </div>
        </form>

        <div style={{ flex: 1 }}>
          <h3>Existing products</h3>
          <ul style={{ paddingLeft: 16 }}>
            {products.map((p) => (
              <li key={p.id} style={{ marginBottom: 8 }}>
                <strong>{p.name}</strong> — ${p.price} <button style={{ marginLeft: 8 }} onClick={() => setEditing(p)}>Edit</button>
              </li>
            ))}
          </ul>
          <p style={{ color: "#666", fontSize: 13 }}>
            To use local images, put files in <code>product-list/public/images/</code> and set image to <code>http://localhost:3001/images/your-file.jpg</code>
          </p>
        </div>
      </div>
    </div>
  );
}
