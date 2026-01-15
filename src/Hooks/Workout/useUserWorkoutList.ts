import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserWorkoutList } from "../../Http/Request/Workout/GETUserWorkoutList";

export default function useUserWorkoutList() {
  const { isAuthenticated, user } = useAuth0();

  return useQuery({
    queryKey: [`${user?.name} workout list`],
    queryFn: () => GETUserWorkoutList(),
    enabled: isAuthenticated,
  });
}
