import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent, { UserEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";

describe("Profile Bubble", () => {
  it("render profile title", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Profile Bubble")).toBeInTheDocument();
  });

  it("navigates to profile page", async () => {
    render(<RouterProvider router={router} />);

    const link = screen.getByTestId("profileLink");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await waitFor(() => screen.findByText(/Profile Page/i));
  });
});
