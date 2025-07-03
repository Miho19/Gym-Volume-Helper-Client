import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";

describe("Home Logout", () => {
  it("render Logout Button", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });

  it("navigates to Login Page", async () => {
    render(<RouterProvider router={router} />);

    const link = screen.getByTestId("homeLogoutButton");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await waitFor(() => screen.findByText(/Log in With Facebook/i));
  });
});
