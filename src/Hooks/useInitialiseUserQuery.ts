import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { POSTInitialiseUser } from "../Http/RequestFunctions/POSTInitialiseUser";

type Props = {};

export default function useInitialiseUserQuery(_props: Props) {
  const { user, isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["auth0 Initialise User"],
    queryFn: () => POSTInitialiseUser(user?.sub),
    enabled: isAuthenticated,
  });
}
