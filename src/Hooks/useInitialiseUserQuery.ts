import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { POSTUserProfile } from "../Http/Request/User/POSTUserProfile";

export default function useInitialiseUserQuery() {
  const { user, isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["auth0 Initialise User"],
    queryFn: () => POSTUserProfile(user?.sub),
    enabled: isAuthenticated,
  });
}
