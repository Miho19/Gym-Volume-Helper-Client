import React from "react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import * as auth0 from "@auth0/auth0-react";
import { testRender, testUserProfile } from "../../Util";

vi.mock("@auth0/auth0-react");

describe("Home Logout", async () => {
  it("render a clickable Logout Button", async () => {
    const logoutMock = vi.fn();

    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: vi.fn(),
      isAuthenticated: true,
      logout: logoutMock,
      isLoading: false,
      user: testUserProfile,
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
