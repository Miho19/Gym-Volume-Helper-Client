import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { router } from "../../../src/Router/Router";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { testAuth0User } from "../../Util";

vi.mock("@auth0/auth0-react");
const client = new QueryClient();

describe("Profile Bubble", async () => {
  it("render profile bubble with user data", async () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testAuth0User,
    });

    render(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    await waitFor(async () => {
      expect(screen.getByText(testAuth0User.name)).toBeInTheDocument();
    });

    const profilePicture = screen.getByRole("img", {
      name: /profile picture/i,
    });
    const imgSrc = profilePicture.getAttribute("src");
    expect(imgSrc).toBe(testAuth0User.pictureSource);
  });
});
