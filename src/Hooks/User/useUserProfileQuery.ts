import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserProfile } from "../../Http/Request/UserProfile/GETUserProfile";

export default function useUserProfileQuery() {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["auth0 Initialise User"],
    queryFn: () => GETUserProfile(),
    enabled: isAuthenticated,
  });
}
