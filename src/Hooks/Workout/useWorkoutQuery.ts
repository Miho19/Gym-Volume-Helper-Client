import { useQuery } from "@tanstack/react-query";
import { GETWorkout } from "../../Http/Request/Workout/GETWorkout";
import { useAuth0 } from "@auth0/auth0-react";

export default function useWorkoutQuery(workoutId: string | undefined) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`workout ${workoutId}`],
    queryFn: () => GETWorkout(workoutId),
    enabled: isAuthenticated && typeof workoutId !== "undefined",
  });
}
