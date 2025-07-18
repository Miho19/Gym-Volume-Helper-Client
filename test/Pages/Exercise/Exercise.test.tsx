import React from "react";
import { screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import * as auth0 from "@auth0/auth0-react";
import { testUser } from "../../../src/Components/ProfileBubble/UserType";

import { testRender } from "../../Util";

vi.mock("@auth0/auth0-react");

describe("Exercise Page", async () => {
  it("render exercise page", async () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testUser,
    });

    const result = testRender();
    const link = await result.findByText("Goto Exercise");

    expect(link).toBeInTheDocument();
    await userEvent.click(link);
    expect(screen.getByText(/Exericses/i)).toBeInTheDocument();
  });
});
