import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

type UserResponseType = {
  name: string;
  weight: string;
};

function fetchUser(userSub: string): Promise<UserResponseType> {
  if (!userSub || userSub === undefined)
    throw new Error("Missing user Sub argument");

  return new Promise(() => {});
}

type Props = {};

function useUserQuery(_props: Props) {
  const { user, isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["auth0 User"],
    queryFn: () => "ll",
    enabled: isAuthenticated,
  });
}
