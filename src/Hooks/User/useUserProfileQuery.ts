import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserProfile } from "../../Http/Request/UserProfile/GETUserProfile";

export const USEUSERPROFILEQUERYKEY: string = "Current User Profile";

export default function useUserProfileQuery() {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [USEUSERPROFILEQUERYKEY],
    queryFn: () => GETUserProfile(),
    enabled: isAuthenticated,
  });
}
