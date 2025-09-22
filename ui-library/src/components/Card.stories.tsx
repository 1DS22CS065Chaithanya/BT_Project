// import type { Meta, StoryObj } from "@storybook/react";
// import ProductCard from "./Card";

// const meta: Meta<typeof ProductCard> = {
//   title: "Components/ProductCard",
//   component: ProductCard,
//   tags: ["autodocs"], // enables auto-generated docs
//   argTypes: {
//     onClick: { action: "clicked" },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof ProductCard>;

// export const Default: Story = {
//   args: {
//     name: "Sample Product",
//     price: 49.99,
//     description: "A nice product with great features.",
//     image: "https://via.placeholder.com/200",
//     inStock: true,
//   },
// };

// export const WithDiscount: Story = {
//   args: {
//     name: "Discounted Product",
//     price: 100,
//     discount: 20,
//     description: "This product is available with 20% off!",
//     image: "https://via.placeholder.com/200",
//     inStock: true,
//   },
// };

// export const OutOfStock: Story = {
//   args: {
//     name: "Unavailable Product",
//     price: 75,
//     description: "Currently out of stock.",
//     image: "https://via.placeholder.com/200",
//     inStock: false,
//   },
// };
import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./Card";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"], 
  argTypes: {
    onClick: { action: "clicked" }, 
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;


export const Default: Story = {
  args: {
    name: "Sample Product",
    price: 49.99,
    description: "A nice product with great features.",
    image: "https://via.placeholder.com/200",
    inStock: true,
  },
};


export const WithDiscount: Story = {
  args: {
    name: "Discounted Product",
    price: 100,
    discount: 20,
    description: "This product is available with 20% off!",
    image: "https://via.placeholder.com/200",
    inStock: true,
  },
};


export const OutOfStock: Story = {
  args: {
    name: "Unavailable Product",
    price: 75,
    description: "Currently out of stock.",
    image: "https://via.placeholder.com/200",
    inStock: false,
  },
};
