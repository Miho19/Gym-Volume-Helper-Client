import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserWorkoutSession } from "../../Http/Request/Exercise/GETUserExerciseMetrics";

export type UserWorkoutSessionQueryParameterType = {
  workoutId: string | undefined;
  exerciseId: string | undefined;
};

function userExerciseMetricQueryKey(
  input: UserWorkoutSessionQueryParameterType,
) {
  const { exerciseId, workoutId } = input;
  if (typeof exerciseId === "undefined")
    throw new Error("Exercise Id is undefined");
  if (typeof workoutId === "undefined")
    throw new Error("Workout Id is undefined");
  return `user metrics for exercise ${exerciseId} in workout ${workoutId}`;
}

export default function useUserWorkoutSessionQuery(
  input: UserWorkoutSessionQueryParameterType,
) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [userExerciseMetricQueryKey(input)],
    queryFn: () => GETUserWorkoutSession(input),
    enabled: isAuthenticated,
  });
}
