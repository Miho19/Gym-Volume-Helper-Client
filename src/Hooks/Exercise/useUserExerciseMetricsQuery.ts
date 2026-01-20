import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserExerciseMetric } from "../../Http/Request/GETUserExerciseMetrics";

export type UserExerciseMetricQueryParameterType = {
  workoutId: string | undefined;
  exerciseId: string | undefined;
};

function userExerciseMetricQueryKey(
  input: UserExerciseMetricQueryParameterType,
) {
  const { exerciseId, workoutId } = input;
  if (typeof exerciseId === "undefined")
    throw new Error("Exercise Id is undefined");
  if (typeof workoutId === "undefined")
    throw new Error("Workout Id is undefined");
  return `user metrics for exercise ${exerciseId} in workout ${workoutId}`;
}

export default function useUserExerciseMetricsQuery(
  input: UserExerciseMetricQueryParameterType,
) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [userExerciseMetricQueryKey(input)],
    queryFn: () => GETUserExerciseMetric(input),
    enabled: isAuthenticated,
  });
}
