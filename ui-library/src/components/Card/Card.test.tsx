import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./Card";
// import React from "react";

// Mock the Button component so we don’t depend on its internal logic
vi.mock("./Button/Button", () => ({
  default: ({ label, onClick }: { label: string; onClick?: () => void }) => (
    <button onClick={onClick}>{label}</button>
  ),
}));

describe("ProductCard", () => {
  const mockProps = {
    name: "Test Product",
    price: 100,
    description: "A cool product",
    image: "test.jpg",
    onClick: vi.fn(),
  };

  test("renders product details correctly", () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("A cool product")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
  });

  test("calls onClick when card is clicked", () => {
    render(<ProductCard {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /view/i }).closest("div")!);
    expect(mockProps.onClick).toHaveBeenCalled();
  });

  test("displays discounted price when discount is provided", () => {
    render(<ProductCard {...mockProps} discount={20} />);
    expect(screen.getByText("$100.00")).toHaveClass("line-through");
    expect(screen.getByText("$80.00")).toBeInTheDocument();
  });

  test("shows 'Out of stock' when inStock is false", () => {
    render(<ProductCard {...mockProps} inStock={false} />);
    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });

  test("stops event propagation when View button is clicked", () => {
    const stopPropagation = vi.fn();
    render(<ProductCard {...mockProps} />);
    const button = screen.getByText("View");

    // Simulate stopPropagation
    fireEvent.click(button, { stopPropagation });
    expect(stopPropagation).toHaveBeenCalled();
  });
});
