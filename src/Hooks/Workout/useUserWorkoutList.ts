import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserWorkoutList } from "../../Http/Request/Workout/GETUserWorkoutList";

export function userWorkoutListQueryKey(userName: string | undefined): string {
  if (userName === undefined) throw new Error("Username is undefined");
  return `${userName} workout list`;
}

export default function useUserWorkoutListQuery() {
  const { isAuthenticated, user } = useAuth0();

  return useQuery({
    queryKey: [userWorkoutListQueryKey(user?.name)],
    queryFn: () => GETUserWorkoutList(),
    enabled: isAuthenticated,
  });
}
