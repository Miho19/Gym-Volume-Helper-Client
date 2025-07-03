import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0DOMAIN}
      clientId={import.meta.env.VITE_AUTH0CLIENTID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>
);
