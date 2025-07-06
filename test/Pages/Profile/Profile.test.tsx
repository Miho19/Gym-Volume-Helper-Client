import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import * as auth0 from "@auth0/auth0-react";

vi.mock("@auth0/auth0-react");

type User = {
  name: string;
  picture: string;
};

describe("Profile Page", () => {
  it("Render Profile Page", async () => {
    const user: User = {
      name: "Josh April",
      picture:
        "https://scontent.fpmr1-1.fna.fbcdn.net/v/t39.30808-6/464865815_27316730121305627_365363424115207086_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TKDErlILbY8Q7kNvwEpNC_P&_nc_oc=AdmGYUiyoACPQPvO8pa3JGO1DgWavgT5v1Bg5XhGKY5O9dHz_xhTvb63ynVMdlJh9bY&_nc_zt=23&_nc_ht=scontent.fpmr1-1.fna&_nc_gid=yFnSZN2e6DYDK_0IIMu4PA&oh=00_AfT4NmOZ8YrgvRSl8ifWyy4dpiU-mhncI3UB2BNxLXzCjw&oe=686F26E0",
    };

    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user,
    });

    render(<RouterProvider router={router} />);
    const link = screen.getByTestId("profileLink");
    expect(link).toBeInTheDocument();
    await userEvent.click(link);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
