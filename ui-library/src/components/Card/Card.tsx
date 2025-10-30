
// import React from "react";
// import "./Card.css";
// import Button from "./Button";

// type Props = {
//   name: string;
//   price: number;
//   description?: string;
//   image: string;
//   inStock?: boolean;
//   discount?: number;
//   onClick?: () => void;
// };

// export default function ProductCard({
//   name,
//   price,
//   description,
//   image,
//   inStock = true,
//   discount,
//   onClick,
// }: Props) {
//   const finalPrice = discount ? price - (price * discount) / 100 : price;

//   return (
//     <div className="product-card" role="button" onClick={onClick}>
//       <div className="product-image-wrap">
//         <img src={image} alt={name} className="product-image" />
//       </div>
//       <div className="product-body">
//         <h3 className="product-name">{name}</h3>
//         <p className="product-desc">{description}</p>
//         <div className="product-footer">
//           {!inStock ? (
//             <span className="out-of-stock">Out of stock</span>
//           ) : discount ? (
//             <div className="price">
//               <span className="old-price">${price.toFixed(2)}</span>
//               <span className="discounted">${finalPrice.toFixed(2)}</span>
//             </div>
//           ) : (
//             <div className="price">${price.toFixed(2)}</div>
//           )}

//           <Button
//             label="View"
//             onClick={(e) => {
//               e.stopPropagation();
//               onClick?.();
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Button from "../Button/Button";

type Props = {
  name: string;
  price: number;
  description?: string;
  image: string;
  inStock?: boolean;
  discount?: number;
  onClick?: () => void;
};

export default function ProductCard({
  name,
  price,
  description,
  image,
  inStock = true,
  discount,
  onClick,
}: Props) {
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div
      className="w-64 rounded-xl overflow-hidden bg-white shadow-md cursor-pointer flex flex-col transition-transform duration-150 ease-in hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800"
      role="button"
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100">
          {name}
        </h3>

        <p className="text-sm text-gray-500 dark:text-slate-300 min-h-[36px]">
          {description}
        </p>

        <div className="flex justify-between items-center gap-2">
          {/* Price Section */}
          {!inStock ? (
            <span className="font-semibold text-gray-400 dark:text-slate-400">
              Out of stock
            </span>
          ) : discount ? (
            <div className="font-semibold">
              <span className="line-through text-red-500 mr-2">
                ${price.toFixed(2)}
              </span>
              <span className="text-green-600 dark:text-green-400">
                ${finalPrice.toFixed(2)}
              </span>
            </div>
          ) : (
            <div className="font-semibold text-gray-800 dark:text-green-400">
              ${price.toFixed(2)}
            </div>
          )}

          {/* View Button */}
          <Button
            label="View"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          />
        </div>
      </div>
    </div>
  );
}
