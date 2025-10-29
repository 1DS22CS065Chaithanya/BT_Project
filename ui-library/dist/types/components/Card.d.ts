type Props = {
    name: string;
    price: number;
    description?: string;
    image: string;
    inStock?: boolean;
    discount?: number;
    onClick?: () => void;
};
export default function ProductCard({ name, price, description, image, inStock, discount, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
