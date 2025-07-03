import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router";

function Root() {
  return <Outlet />;
}

export default Root;
