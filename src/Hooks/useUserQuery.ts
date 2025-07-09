import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

type UserResponseType = {
  name: string;
  weight: string;
};

async function fetchUser(
  userSub: string | undefined
): Promise<UserResponseType> {
  if (!userSub || userSub === undefined)
    throw new Error("Missing user Sub argument");

  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth0ID: userSub }),
    credentials: "include",
  };

  const URL = import.meta.env.DEV ? "http://localhost:5052/auth/" : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to fetch user");

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserResponseType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to authenicate user");
  }
}

type Props = {};

export default function useUserQuery(_props: Props) {
  const { user, isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["auth0 User"],
    queryFn: () => fetchUser(user?.sub),
    enabled: isAuthenticated,
  });
}
