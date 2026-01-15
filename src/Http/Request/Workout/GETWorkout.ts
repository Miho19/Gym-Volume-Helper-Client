import { workoutZodObject, type Workout } from "../../../Zod/WorkoutSchema";
import { BASEADDRESS } from "../BaseURLAddress";

export function GETWORKOUTENDPOINT(workoutId: string | undefined): URL {
  if (typeof workoutId === "undefined")
    throw new Error("Workout Id is undefined");
  return new URL(`workout/${workoutId}`, BASEADDRESS);
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

export async function GETWorkout(
  workoutId: string | undefined,
  endpoint: URL = GETWORKOUTENDPOINT(workoutId)
): Promise<Workout> {
  try {
    if (typeof workoutId === "undefined")
      throw new Error("Workout Id is undefined");

    const fetchOptions = generateFetchOptions();
    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(`Unexpected server error:\n ${response.statusText}`);

    const responseBody = await response.json();

    const result = await workoutZodObject.parseAsync(responseBody);

    return result;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred\n ${
        error instanceof Error && error?.message
      }`
    );
  }
}
