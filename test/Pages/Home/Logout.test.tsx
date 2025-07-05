import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";

vi.mock("@auth0/auth0-react");

describe("Home Logout", () => {
  it("render Logout Button", () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: vi.fn(),
      isAuthenticated: true,
      isLoading: false,
      logout: vi.fn(),
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });

  it("navigates to Login Page", async () => {
    const logoutMock = vi.fn();

    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: vi.fn(),
      isAuthenticated: true,
      isLoading: false,
      logout: logoutMock,
    });

    render(<RouterProvider router={router} />);

    const link = screen.getByTestId("homeLogoutButton");

    expect(link).toBeInTheDocument();

    await userEvent.click(link);

    expect(logoutMock).toBeCalledTimes(1);
  });
});
