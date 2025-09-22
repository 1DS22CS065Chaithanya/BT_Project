// import React from "react";
// import "./Card.css";

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
//           <button
//             className="view-button"
//             onClick={(e) => {
//               e.stopPropagation();
//               onClick?.();
//             }}
//             aria-label={`View ${name}`}
//           >
//             View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Card.css";
// import type {} from "./Card.css";

import Button from "./Button";

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
    <div className="product-card" role="button" onClick={onClick}>
      <div className="product-image-wrap">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          {!inStock ? (
            <span className="out-of-stock">Out of stock</span>
          ) : discount ? (
            <div className="price">
              <span className="old-price">${price.toFixed(2)}</span>
              <span className="discounted">${finalPrice.toFixed(2)}</span>
            </div>
          ) : (
            <div className="price">${price.toFixed(2)}</div>
          )}

         
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
