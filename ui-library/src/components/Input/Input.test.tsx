
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders the input with a label", () => {
    render(<Input label="Name" value="" onChange={() => {}} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders the correct input type", () => {
    render(<Input type="password" value="" onChange={() => {}} />);
    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "password");
  });

  it("calls onChange when typing in the input", () => {
  const mockOnChange = vi.fn();
  render(<Input label="Username" value="" onChange={mockOnChange} placeholder="Enter name" />);
  const input = screen.getByPlaceholderText("Enter name");
  fireEvent.change(input, { target: { value: "John" } });

  expect(mockOnChange).toHaveBeenCalledTimes(1);

});


  it("renders select when as='select' is passed", () => {
    const mockOnChange = vi.fn();
    render(
      <Input
        as="select"
        value="option1"
        onChange={mockOnChange}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: "option2" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
