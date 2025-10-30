import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with the given label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it("applies additional className when provided", () => {
    render(<Button label="Styled" className="bg-red-500" />);
    const button = screen.getByText("Styled");
    expect(button.className).toContain("bg-red-500");
  });
});
