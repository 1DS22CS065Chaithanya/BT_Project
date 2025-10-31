
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./Card"; 
import React from "react";
import { vi } from "vitest";

const mockProps = {
  name: "Test Product",
  price: 100,
  description: "A cool product",
  image: "test.jpg",
  inStock: true,
};

describe("ProductCard", () => {
  test("renders product details correctly", () => {
    render(<ProductCard {...mockProps} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  test("calls onClick when card is clicked", () => {
    const mockOnClick = vi.fn();
    render(<ProductCard {...mockProps} onClick={mockOnClick} />);

    const card = screen.getByRole("button", { name: /test product/i });
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("displays discounted price when discount is provided", () => {
    render(<ProductCard {...mockProps} discount={20} />);
    expect(screen.getByText("$80.00")).toBeInTheDocument();
  });

  test("shows 'Out of stock' when inStock is false", () => {
    render(<ProductCard {...mockProps} inStock={false} />);
    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });

});
