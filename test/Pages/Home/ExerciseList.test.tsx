import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";

describe("Exercise List", () => {
  it("render exercise list", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Exercise List")).toBeInTheDocument();
  });

  it("navigates to exercise page", async () => {
    render(<RouterProvider router={router} />);

    const link = screen.getByTestId("exerciseLink");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await waitFor(() => screen.findByText(/Exericse Page/i));
  });
});
