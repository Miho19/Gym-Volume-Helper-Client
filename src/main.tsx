import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./msw/browser");
  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0DOMAIN}
        clientId={import.meta.env.VITE_AUTH0CLIENTID}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Auth0Provider>
    </StrictMode>
  )
);
