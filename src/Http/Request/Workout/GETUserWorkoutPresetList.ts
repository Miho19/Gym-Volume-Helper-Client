import {
  workoutZodObjectArray,
  type Workout,
} from "../../../Zod/WorkoutSchema";
import { BASEADDRESS } from "../BaseURLAddress";

export const GETUSERWORKOUTLISTENDPOINT: URL = new URL(
  "user/me/workout",
  BASEADDRESS
);

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

export async function GETUserWorkoutList(
  endpoint: URL = GETUSERWORKOUTLISTENDPOINT
): Promise<Workout[]> {
  try {
    const fetchOptions: RequestInit = generateFetchOptions();
    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok) throw new Error(`Unexpected response from server`);
    const responseBody = await response.json();
    const result = await workoutZodObjectArray.parseAsync(responseBody);
    return result;
  } catch {
    throw new Error(`Failed to fetch user workout list`);
  }
}
