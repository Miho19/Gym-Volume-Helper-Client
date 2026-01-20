import type { UserExerciseMetricQueryParameterType } from "../../Hooks/Exercise/useUserExerciseMetricsQuery";
import {
  exerciseMetricZodObject,
  type ExerciseMetric,
} from "../../Zod/ExerciseMetricSchema";
import { BASEADDRESS } from "./BaseURLAddress";

export function GETUSEREXERCISEMETRICENDPOINT(
  input: UserExerciseMetricQueryParameterType,
): URL {
  const { exerciseId, workoutId } = input;
  if (typeof exerciseId === "undefined")
    throw new Error("Exercise Id is undefined");
  if (typeof workoutId === "undefined")
    throw new Error("Workout Id is undefined");

  return new URL(`workout/${workoutId}/exercise/${exerciseId}`, BASEADDRESS);
}

function generateFetchOptions(): RequestInit {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  return fetchOptions;
}

export async function GETUserExerciseMetric(
  input: UserExerciseMetricQueryParameterType,
  endpoint: URL = GETUSEREXERCISEMETRICENDPOINT(input),
): Promise<ExerciseMetric> {
  try {
    const fetchOptions = generateFetchOptions();
    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(
        `Unexpected response from server: ${response.statusText}`,
      );

    const responseBody = await response.json();
    const result = await exerciseMetricZodObject.parseAsync(responseBody);
    return result;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred\n${error instanceof Error && error.message}`,
    );
  }
}
