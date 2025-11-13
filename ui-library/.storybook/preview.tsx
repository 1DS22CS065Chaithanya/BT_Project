
import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../src/components/ThemeProvider/ThemeProvider"; // adjust path if needed

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider>
        <MemoryRouter initialEntries={["/"]}>
          <div className="p-4">
            <Story />
          </div>
        </MemoryRouter>
      </ThemeProvider>
    ),
  ],
};

export default preview;
