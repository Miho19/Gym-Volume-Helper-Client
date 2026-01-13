import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import * as auth0 from "@auth0/auth0-react";
import { testRender, testAuth0User } from "../../Util";

vi.mock("@auth0/auth0-react");

describe("Home Logout", async () => {
  it("render a clickable Logout Button", async () => {
    const logoutMock = vi.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: vi.fn(),
      isAuthenticated: true,
      logout: logoutMock,
      isLoading: false,
      user: testAuth0User,
    });

    const result = testRender();

    const Logout = await result.findByText("Log Out");

    expect(Logout).toBeInTheDocument();

    await userEvent.click(Logout);

    expect(logoutMock).toBeCalledTimes(1);
  });
});
