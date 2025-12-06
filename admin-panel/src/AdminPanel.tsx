// import React from "react";
// import { Modal, Button, Input } from "ui-library";
// import "./index.css";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
// };

// export default function AdminPanel() {
//   const [products, setProducts] = React.useState<Product[]>([]);
//   const [editing, setEditing] = React.useState<Product | null>(null);
//   const [form, setForm] = React.useState({
//     name: "",
//     price: "",
//     description: "",
//     image: "",
//     inStock: "true",
//     discount: "0",
//   });
//   const [modal, setModal] = React.useState({
//     isOpen: false,
//     title: "",
//     message: "",
//   });

//   // --- Fetch products from backend ---
//   React.useEffect(() => {
//     fetchProducts();
//   }, []);

//   async function fetchProducts() {
//     try {
//       const res = await fetch("http://127.0.0.1:3001/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   }

//   // --- Sync form when editing ---
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
//       setForm({
//         name: "",
//         price: "",
//         description: "",
//         image: "",
//         inStock: "true",
//         discount: "0",
//       });
//     }
//   }, [editing]);

//   // --- Backend API calls ---
//   async function addProductAPI(p: Product) {
//     const res = await fetch("http://127.0.0.1:3001/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(p),
//     });
//     return await res.json();
//   }

//   async function updateProductAPI(p: Product) {
//     const res = await fetch(`http://127.0.0.1:3001/products/${p.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(p),
//     });
//     return await res.json();
//   }

//   // --- Form submission ---
//   async function handleSubmit(e: React.FormEvent) {
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

//     try {
//       if (editing) {
//         const updated = await updateProductAPI(p);
//         setModal({
//           isOpen: true,
//           title: "Product Updated",
//           message: `${updated.name} was updated.`,
//         });
//         setEditing(null);
//       } else {
//         const added = await addProductAPI(p);
//         setModal({
//           isOpen: true,
//           title: "Product Added",
//           message: `${added.name} was added.`,
//         });
//       }
//       setForm({
//         name: "",
//         price: "",
//         description: "",
//         image: "",
//         inStock: "true",
//         discount: "0",
//       });
//       fetchProducts(); // Refresh product list
//     } catch (err) {
//       console.error(err);
//       setModal({
//         isOpen: true,
//         title: "Error",
//         message: "Failed to save product.",
//       });
//     }
//   }

//   return (
//     <div style={{ padding: 12 }}>
//       <h2>Admin Panel</h2>

//       <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
//         {/* --- Form --- */}
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             minWidth: 320,
//             display: "flex",
//             flexDirection: "column",
//             gap: 12,
//           }}
//         >
//           <Input
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//           <Input
//             placeholder="Price"
//             type="number"
//             value={form.price}
//             onChange={(e) => setForm({ ...form, price: e.target.value })}
//             required
//           />
//           <Input
//             placeholder="Image URL (absolute)"
//             value={form.image}
//             onChange={(e) => setForm({ ...form, image: e.target.value })}
//             required
//           />
//           <Input
//             placeholder="Short description"
//             value={form.description}
//             onChange={(e) => setForm({ ...form, description: e.target.value })}
//           />
//           <label>
//             In stock:
//             <select
//               value={form.inStock}
//               onChange={(e) => setForm({ ...form, inStock: e.target.value })}
//             >
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </label>
//           <Input
//             placeholder="Discount (%)"
//             type="number"
//             value={form.discount}
//             onChange={(e) => setForm({ ...form, discount: e.target.value })}
//           />

//           <div style={{ display: "flex", gap: 8 }}>
//             <Button
//               type="submit"
//               label={editing ? "Save Changes" : "Add Product"}
//             />
//             {editing && (
//               <Button
//                 type="button"
//                 label="Cancel"
//                 onClick={() => setEditing(null)}
//               />
//             )}
//           </div>
//         </form>

//         {/* --- Product List --- */}
//         <div style={{ flex: 1 }}>
//           <h3 className="text-black dark:text-background">Existing products</h3>
//           <ul style={{ paddingLeft: 16 }}>
//             {products.map((p) => (
//               <li key={p.id} style={{ marginBottom: 8 }}>
//                 <strong>{p.name}</strong> — ${p.price}{" "}
//                 <Button
//                   type="button"
//                   label="Edit"
//                   onClick={() => setEditing(p)}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* --- Modal --- */}
//       <Modal
//         isOpen={modal.isOpen}
//         title={modal.title}
//         message={modal.message}
//         onClose={() => setModal({ ...modal, isOpen: false })}
//       />
//     </div>
//   );
// }
import React from "react";
import { Modal, Button, Input } from "ui-library";
import "./index.css";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string; // ✅ ADD CATEGORY
  inStock?: boolean;
  discount?: number;
};

export default function AdminPanel() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [editing, setEditing] = React.useState<Product | null>(null);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "", // ✅ ADD CATEGORY
    inStock: "true",
    discount: "0",
  });
  const [modal, setModal] = React.useState({
    isOpen: false,
    title: "",
    message: "",
  });

  // --- Fetch products from backend ---
  React.useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("http://127.0.0.1:3001/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }

  // --- Sync form when editing ---
  React.useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name,
        price: String(editing.price),
        description: editing.description,
        image: editing.image,
        category: editing.category || "", // ✅ LOAD CATEGORY
        inStock: editing.inStock ? "true" : "false",
        discount: String(editing.discount ?? 0),
      });
    } else {
      setForm({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        inStock: "true",
        discount: "0",
      });
    }
  }, [editing]);

  // --- Backend API calls ---
  async function addProductAPI(p: Product) {
    const res = await fetch("http://127.0.0.1:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
    return await res.json();
  }

  async function updateProductAPI(p: Product) {
    const res = await fetch(`http://127.0.0.1:3001/products/${p.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
    return await res.json();
  }

  // --- Form submission ---
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const p: Product = {
      id: editing ? editing.id : String(Date.now()),
      name: form.name,
      price: Number(form.price || 0),
      description: form.description,
      image: form.image,
      // category: form.category.trim(),
      //  // ✅ SEND CATEGORY
      category: form.category.trim().toLowerCase(),

      inStock: form.inStock === "true",
      discount: Number(form.discount || 0),
    };

    if (!p.category) {
      setModal({
        isOpen: true,
        title: "Invalid Category",
        message: "Please enter a product category",
      });
      return;
    }

    try {
      if (editing) {
        const updated = await updateProductAPI(p);
        setModal({
          isOpen: true,
          title: "Product Updated",
          message: `${updated.name} was updated.`,
        });
        setEditing(null);
      } else {
        const added = await addProductAPI(p);
        setModal({
          isOpen: true,
          title: "Product Added",
          message: `${added.name} was added.`,
        });
      }

      setForm({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        inStock: "true",
        discount: "0",
      });

      fetchProducts(); // Refresh product list
    } catch (err) {
      console.error(err);
      setModal({
        isOpen: true,
        title: "Error",
        message: "Failed to save product.",
      });
    }
  }

  return (
    <div style={{ padding: 12 }}>
      <h2>Admin Panel</h2>

      <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
        {/* --- Form --- */}
        <form
          onSubmit={handleSubmit}
          style={{
            minWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <Input
            placeholder="Category (e.g. electronics, furniture)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
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
            <Button
              type="submit"
              label={editing ? "Save Changes" : "Add Product"}
            />

            {editing && (
              <Button
                type="button"
                label="Cancel"
                onClick={() => setEditing(null)}
              />
            )}
          </div>
        </form>

        {/* --- Product List --- */}
        <div style={{ flex: 1 }}>
          <h3 className="text-black dark:text-background">Existing products</h3>

          <ul style={{ paddingLeft: 16 }}>
            {products.map((p) => (
              <li key={p.id} style={{ marginBottom: 8 }}>
                <strong>{p.name}</strong> — ${p.price}  
                <span style={{ opacity: 0.7 }}> ({p.category})</span>

                <Button
                  type="button"
                  label="Edit"
                  onClick={() => setEditing(p)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Modal --- */}
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </div>
  );
}
