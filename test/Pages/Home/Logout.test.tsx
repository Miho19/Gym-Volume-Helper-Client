import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { testRender } from "../../Util";
import { testUser } from "../../../src/Components/ProfileBubble/UserType";

vi.mock("@auth0/auth0-react");

describe("Home Logout", async () => {
  it("render a clickable Logout Button", async () => {
    const logoutMock = vi.fn();

    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: vi.fn(),
      isAuthenticated: true,
      logout: logoutMock,
      isLoading: false,
      user: testUser,
    });

    const result = testRender();

    const Logout = await result.findByText("Log Out");

    expect(Logout).toBeInTheDocument();

    await userEvent.click(Logout);

    expect(logoutMock).toBeCalledTimes(1);
  });

  it("Should make the user authenication request", async () => {
    const response = await fetch("http://localhost:5052/auth/", {
      method: "POST",
    });

    const body = await response.json();

    expect(body.name).toBeTruthy();
  });
});
