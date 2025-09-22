import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

// Story wrapper to manage open/close state
const Template = ({ title, message }: { title: string; message: string }) => {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      isOpen={open}
      title={title}
      message={message}
      onClose={() => setOpen(false)}
    />
  );
};

export const ProductAdded: Story = {
  render: () => (
    <Template
      title="Product Added"
      message="The new product was added successfully."
    />
  ),
};

export const ProductUpdated: Story = {
  render: () => (
    <Template
      title=" Product Updated"
      message="Changes to the product were saved successfully."
    />
  ),
};
