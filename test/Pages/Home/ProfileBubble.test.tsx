import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";
import { testUser } from "../../../src/Components/ProfileBubble/UserType";

vi.mock("@auth0/auth0-react");

describe("Profile Bubble", () => {
  it("render profile bubble with user data", () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testUser,
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText(testUser.name)).toBeInTheDocument();

    const profilePicture = screen.getByTestId("profilePicture");
    const imgSrc = profilePicture.getAttribute("src");
    expect(imgSrc).toBe(testUser.picture);
  });
});
