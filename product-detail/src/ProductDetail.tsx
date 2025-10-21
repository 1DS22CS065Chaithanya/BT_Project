// //  import {useEffect} from "react";
// // import { Button } from "ui-library"
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
//   product?: Product | null;            // passed by container
// };

// export default function ProductDetail({ product }: Props) {
//   if (!product) {
//     return (
//       <div style={{ padding: 12 }}>
//         <h2 className="text-black dark:text-white">🔍 Product Detail</h2>
//         <p className="text-black dark:text-white">Select a product to view details.</p>
//       </div>
//     );
//   }

//   const finalPrice = product.discount
//     ? (product.price - (product.price * product.discount) / 100).toFixed(2)
//     : product.price.toFixed(2);

//   return (
//     // <div style={{ padding: 12, maxWidth: 900 }}>
//     <div className="p-3 max-w-2xl bg-white dark:bg-gray-900">
//       <h2 className="text-black dark:text-white"> Product Detail</h2>
//       <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{ width: 320, height: 320, objectFit: "cover", borderRadius: 8 }}
//         />
//         <div style={{ flex: 1 }}>
//           <h3 style={{ marginTop: 0 }}>{product.name}</h3>
//           <p style={{ color: "#444" }}>{product.description}</p>

//           <div style={{ marginTop: 16, display: "flex", gap: 12, alignItems: "center" }}>
//             <div style={{ fontSize: 20, fontWeight: 700 }}>
//               ${finalPrice}
//               {product.discount ? (
//                 <span style={{ marginLeft: 10, color: "#999", textDecoration: "line-through", fontSize: 14 }}>
//                   ${product.price.toFixed(2)}
//                 </span>
//               ) : null}
//             </div>
//             <div style={{ color: product.inStock ? "#1a9f3b" : "#a00" }}>
//               {product.inStock ? "In stock" : "Out of stock"}
//             </div>
//           </div>

//           <div style={{ marginTop: 20 }}>
//             {/* <button style={{
//               background: "#0066ff", color: "#fff", padding: "10px 16px", borderRadius: 8, border: "none", cursor: "pointer"
//             }}>
//               Add to Cart
//             </button>  */}
//            {/* <Button className="custom-button" label="View"/> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
  product?: Product | null; // passed by container
};

export default function ProductDetail({ product }: Props) {
  if (!product) {
    return (
      <div className="p-3">
        <h2 className="text-black dark:text-white">🔍 Product Detail</h2>
        <p className="text-black dark:text-white">Select a product to view details.</p>
      </div>
    );
  }

  const finalPrice = product.discount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="p-3 max-w-2xl bg-white dark:bg-gray-900 rounded-md">
      <h2 className="text-black dark:text-white">Product Detail</h2>
      <div className="flex gap-5 mt-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="text-black dark:text-white mt-0">{product.name}</h3>
          <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

          <div className="mt-4 flex gap-3 items-center">
            <div className="text-lg font-bold text-black dark:text-white">
              ${finalPrice}
              {product.discount ? (
                <span className="ml-2 text-gray-500 dark:text-gray-400 line-through text-sm">
                  ${product.price.toFixed(2)}
                </span>
              ) : null}
            </div>
            <div className={product.inStock ? "text-green-600" : "text-red-600"}>
              {product.inStock ? "In stock" : "Out of stock"}
            </div>
          </div>

          <div className="mt-5">
            {/* Optional Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

