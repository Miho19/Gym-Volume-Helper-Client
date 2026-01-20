import {
  exerciseZobObjectArray,
  type Exercise,
} from "../../../Zod/ExerciseSchema";
import { BASEADDRESS } from "../BaseURLAddress";

export function GETWORKOUTEXERCISELISTENDPOINT(
  workoutId: string | undefined,
): URL {
  if (typeof workoutId === "undefined")
    throw new Error("WorkoutId is undefined");
  return new URL(`workout/${workoutId}/exercise`, BASEADDRESS);
}

function generateFetchOptions() {
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

export async function GETWorkoutExerciseList(
  workoutId: string | undefined,
  endpoint: URL = GETWORKOUTEXERCISELISTENDPOINT(workoutId),
): Promise<Exercise[]> {
  try {
    const fetchOptions = generateFetchOptions();

    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(
        `Unexpected response from server: ${response.statusText}`,
      );

    const responseBody = await response.json();
    const result = await exerciseZobObjectArray.parseAsync(responseBody);
    return result;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred\n${error instanceof Error && error.message}`,
    );
  }
}
