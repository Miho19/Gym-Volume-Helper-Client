import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router";

function Root() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigator = useNavigate();

  if (!isLoading) {
    if (!isAuthenticated) navigator("/login");
  }

  return <Outlet />;
}

export default Root;
