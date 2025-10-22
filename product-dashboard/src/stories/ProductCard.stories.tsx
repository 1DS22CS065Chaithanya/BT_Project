import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../components/ProductCard";

// Default export with metadata
const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
};

export default meta;  // <-- this is the required default export

type Story = StoryObj<typeof ProductCard>;

// Define stories
export const Default: Story = {
  args: {
    name: "Wireless Headphones",
    price: 120,
    description: "High quality sound with noise cancellation.",
    image: "/images/Headphones.jpg",
  },
};

export const OutOfStock: Story = {
  args: {
    name: "Smartphone X",
    price: 899,
    description: "Latest model with amazing features.",
    image: "/images/Mobile.webp",
    inStock: false,
  },
};

export const Discounted: Story = {
  args: {
    name: "Gaming Laptop",
    price: 1500,
    description: "High performance gaming laptop.",
    image: "/images/Laptop.jpg",
    discount: 20,
  },
};
