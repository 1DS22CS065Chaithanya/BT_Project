import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/products" element={<div className="p-10 text-xl">Product List Page</div>} />
          <Route path="/admin" element={<div className="p-10 text-xl">Admin Panel Page</div>} />
        </Routes>
      
    </ThemeProvider>
  ),
};
