import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "../src/Router/Router";
import { render } from "@testing-library/react";
import { UserBodyResponseTypePOST } from "../src/Http/ResponseType/UserResponseType";

import {testUser} from "../src/msw/user";

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

type UserInformation = UserBodyResponseTypePOST & {
  sub: string;
};

export const testUserProfile: UserInformation = {
  ...testUser, 
  sub: "Fake Sub",
  
};
