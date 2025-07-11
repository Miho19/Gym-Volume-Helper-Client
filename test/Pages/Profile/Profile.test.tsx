import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";
import { testUser } from "../../../src/Components/ProfileBubble/UserType";

vi.mock("@auth0/auth0-react");

describe("Profile Page", () => {
  it("Render Profile Page", async () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testUser,
    });

    render(<RouterProvider router={router} />);
    const link = screen.getByTestId("profileLink");
    expect(link).toBeInTheDocument();
    await userEvent.click(link);

    expect(screen.getByText(testUser.name)).toBeInTheDocument();
  });
});
