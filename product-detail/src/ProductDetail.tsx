
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

