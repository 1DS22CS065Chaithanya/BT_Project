import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
    value: "",
  },
};

export const Number: Story = {
  args: {
    label: "Price",
    type: "number",
    placeholder: "Enter price",
    value: "0",
  },
};

export const Select: Story = {
  args: {
    label: "In Stock",
    as: "select",
    value: "true",
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" },
    ],
  },
};
