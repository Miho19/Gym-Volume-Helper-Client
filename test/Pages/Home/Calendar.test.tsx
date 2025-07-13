import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

describe("Home Calendar Display", () => {
  it("render Calendar", () => {
    render(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });

  it("navigates to Calendar page", async () => {
    render(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    const link = screen.getByTestId("calendarLink");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await waitFor(() => screen.findByText(/Calendar Page/i));
  });
});
