import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "../src/Router/Router";
import { render } from "@testing-library/react";

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
    rerender: (ui) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      ),
  };
}

export type UserInformation = {
  name: string;
  picture: string;
  weight: number;
  sub: string;
};

export const testUser: UserInformation = {
  name: "Josh April",
  picture:
    "https://scontent.fpmr1-1.fna.fbcdn.net/v/t39.30808-6/464865815_27316730121305627_365363424115207086_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TKDErlILbY8Q7kNvwEpNC_P&_nc_oc=AdmGYUiyoACPQPvO8pa3JGO1DgWavgT5v1Bg5XhGKY5O9dHz_xhTvb63ynVMdlJh9bY&_nc_zt=23&_nc_ht=scontent.fpmr1-1.fna&_nc_gid=yFnSZN2e6DYDK_0IIMu4PA&oh=00_AfT4NmOZ8YrgvRSl8ifWyy4dpiU-mhncI3UB2BNxLXzCjw&oe=686F26E0",
  weight: 84,
  sub: "Fake Sub",
};
