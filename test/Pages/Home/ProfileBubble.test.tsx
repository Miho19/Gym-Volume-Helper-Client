import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { router } from "../../../src/Router/Router";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { testUser } from "../../Util";

vi.mock("@auth0/auth0-react");
const client = new QueryClient();

describe("Profile Bubble", async () => {
  it("render profile bubble with user data", async () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testUser,
    });

    render(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    await waitFor(async () => {
      expect(screen.getByText(testUser.name)).toBeInTheDocument();
    });

    const profilePicture = screen.getByTestId("profilePicture");
    const imgSrc = profilePicture.getAttribute("src");
    expect(imgSrc).toBe(testUser.picture);
  });
});
