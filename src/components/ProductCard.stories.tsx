
import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";
import LaptopImage from "../assets/Laptop.jpg";
import SmartwatchImage from "../assets/Smartwatch.jpg";
import Headphones from "../assets/Headphones.jpg";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

// ✅ Individual stories
export const Default: Story = {
  args: {
    name: "Wireless Headphones",
    price: 2999,
    description: "High-quality wireless headphones with noise cancellation.",
    image: Headphones,
    status: "default",
  },
};

export const OutOfStock: Story = {
  args: {
    name: "Laptop",
    price: 59999,
    description: "This laptop is currently unavailable.",
    image: LaptopImage,
    status: "out-of-stock",
  },
};

export const Discounted: Story = {
  args: {
    name: "Smartwatch",
    price: 4999,
    description: "Smartwatch on special discount, grab it now!",
    image: SmartwatchImage,
    status: "discounted",
  },
};

// 🌟 Grid view story showing all cards together
export const GridView: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      <ProductCard
        name="Wireless Headphones"
        price={2999}
        description="High-quality wireless headphones with noise cancellation."
        image={Headphones}
        status="default"
      />
      <ProductCard
        name="Smartwatch"
        price={4999}
        description="Smartwatch on special discount, grab it now!"
        image={SmartwatchImage}
        status="discounted"
      />
      <ProductCard
        name="Laptop"
        price={59999}
        description="This laptop is currently unavailable."
        image={LaptopImage}
        status="out-of-stock"
      />
    </div>
  ),
};
