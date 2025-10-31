import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import React from "react";

// Mock the Button component so the test doesn’t depend on its implementation
vi.mock("../Button/Button", () => ({
  default: ({ label, onClick }: { label: string; onClick?: () => void }) => (
    <button onClick={onClick}>{label}</button>
  ),
}));

describe("Modal Component", () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test("does not render when isOpen is false", () => {
    const { container } = render(
      <Modal
        isOpen={false}
        title="Test Modal"
        message="This is a test"
        onClose={mockOnClose}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  test("renders correctly when isOpen is true", () => {
    render(
      <Modal
        isOpen={true}
        title="Test Modal"
        message="This is a test message"
        onClose={mockOnClose}
      />
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("This is a test message")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
  });

  test("calls onClose when OK button is clicked", () => {
    render(
      <Modal
        isOpen={true}
        title="Close Test"
        message="Click OK to close"
        onClose={mockOnClose}
      />
    );

    fireEvent.click(screen.getByText("OK"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when overlay is clicked", () => {
  const mockOnClose = vi.fn();

  render(
    <Modal
      isOpen={true}
      title="Overlay Test"
      message="Test message"
      onClose={mockOnClose}
    />
  );

  // Select the outer overlay div
  const overlay = screen.getByText("Test message").closest(".fixed")!;
  fireEvent.click(overlay);

  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

  test("does NOT close when clicking inside modal content", () => {
    render(
      <Modal
        isOpen={true}
        title="Inside Modal"
        message="Click inside"
        onClose={mockOnClose}
      />
    );

    const innerBox = screen.getByText("Inside Modal").closest("div")!;
    fireEvent.click(innerBox);
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
