import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { GETWorkoutExerciseList } from "../../Http/Request/Exercise/GETWorkoutPresetExerciseList";

export function workoutExerciseListQueryKey(workoutId: string | undefined) {
  if (typeof workoutId === "undefined")
    throw new Error("WorkoutId is undefined");
  return `workout exercise list ${workoutId}`;
}

export default function useWorkoutExerciseList(workoutId: string | undefined) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [workoutExerciseListQueryKey(workoutId)],
    queryFn: () => GETWorkoutExerciseList(workoutId),
    enabled: isAuthenticated,
  });
}
