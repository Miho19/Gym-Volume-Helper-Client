import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "../src/Router/Router";
import { render } from "@testing-library/react";

import { testUserProfile } from "../src/msw/user";
import { UserProfile } from "../src/Zod/UserSchema";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function testRender() {
  const { rerender, ...result } = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );

  return {
    ...result,
    rerender: () =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      ),
  };
}

type UserInformation = UserProfile & {
  sub: string;
};

export const testAuth0User: UserInformation = {
  ...testUserProfile,
  sub: "Fake Sub",
};
