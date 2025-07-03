import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";

describe("Home Calendar Display", () => {
  it("render Calendar", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });

  it("navigates to Calendar page", async () => {
    render(<RouterProvider router={router} />);

    const link = screen.getByTestId("calendarLink");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await waitFor(() => screen.findByText(/Calendar Page/i));
  });
});
