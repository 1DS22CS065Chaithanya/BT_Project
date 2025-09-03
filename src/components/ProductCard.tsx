import React from "react";

export type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  image: string;
  status?: "default" | "out-of-stock" | "discounted";
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
  status = "default",
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "out-of-stock":
        return "bg-red-100 text-red-700 border border-red-400";
      case "discounted":
        return "bg-green-100 text-green-700 border border-green-400";
      default:
        return "bg-gray-100 text-gray-600 border border-gray-300";
    }
  };

  return (
    <div className="w-96 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-all hover:scale-105 hover:shadow-2xl duration-300 opacity-0 animate-fadeIn">
      {/* Image with hover zoom */}
      <div className="w-full h-72 bg-gray-50 flex items-center justify-center overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        />
        {/* Overlay badge effect on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${getStatusStyles()}`}>
            {status.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 group">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 line-clamp-2">
          {name}
        </h2>
        <p className="text-gray-600 mb-4 text-base line-clamp-4">{description}</p>

        {/* Price and status */}
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">
            ₹{price}
          </p>
          <span
            className={`inline-block px-3 py-1.5 text-sm font-medium rounded-full transition-transform duration-300 hover:scale-105 ${getStatusStyles()}`}
          >
            {status.replace("-", " ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
