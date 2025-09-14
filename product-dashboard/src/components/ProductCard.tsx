import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  image: string;
  inStock?: boolean;
  discount?: number; // percentage discount
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
  inStock = true,
  discount,
}) => {
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-desc">{description}</p>
      {!inStock ? (
        <p className="out-of-stock">Out of Stock</p>
      ) : (
        <p className="price">
          {discount ? (
            <>
              <span className="old-price">${price.toFixed(2)}</span>{" "}
              <span className="discounted">${finalPrice.toFixed(2)}</span>
            </>
          ) : (
            <>${price.toFixed(2)}</>
          )}
        </p>
      )}
    </div>
  );
};

export default ProductCard;
