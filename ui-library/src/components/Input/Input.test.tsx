import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";
import React from "react";

describe("Input component", () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders input with label and placeholder", () => {
    render(
      <Input
        label="Username"
        placeholder="Enter name"
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  test("calls onChange when typing in input", () => {
    render(<Input value="" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "John" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange.mock.calls[0][0].target.value).toBe("John");
  });

  test("renders select dropdown when 'as' is 'select'", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(
      <Input
        as="select"
        value="option1"
        onChange={mockOnChange}
        options={options}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    // simulate selecting another option
    fireEvent.change(select, { target: { value: "option2" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("renders input as required when required prop is true", () => {
    render(<Input value="" onChange={mockOnChange} required />);
    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  test("renders correct input type", () => {
    render(<Input value="" onChange={mockOnChange} type="password" />);
    const input = screen.getByPlaceholderText("") || screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "password");
  });
});
