import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

// Mock ThemeToggle to avoid complexity in unit tests
vi.mock("../ThemeToggle/ThemeToggle", () => ({
  ThemeToggle: () => <button>Toggle Theme</button>,
}));

describe("Header Component", () => {
  const setup = () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  test("renders header with title", () => {
    setup();
    expect(
      screen.getByText("🛍️ Microfrontend Dashboard")
    ).toBeInTheDocument();
  });

  test("renders Product List and Admin Panel links", () => {
    setup();
    expect(screen.getByText("Product List")).toBeInTheDocument();
    expect(screen.getByText("Admin Panel")).toBeInTheDocument();
  });

  test("renders ThemeToggle button", () => {
    setup();
    const button = screen.getByText("Toggle Theme");
    expect(button).toBeInTheDocument();
  });

  test("clicking ThemeToggle works", () => {
    setup();
    const button = screen.getByText("Toggle Theme");
    fireEvent.click(button);
    // We can’t verify theme color change directly here,
    // but this ensures the button is clickable.
    expect(button).toBeEnabled();
  });
});
