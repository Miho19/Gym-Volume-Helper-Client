import type { UserWorkoutPresetType } from "../../Response/UserWorkoutPresetsResponseType";
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
): Promise<UserWorkoutPresetType> {
  try {
    if (typeof workoutId === "undefined")
      throw new Error("Workout Id is undefined");

    const fetchOptions = generateFetchOptions();
    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(`Unexpected server error:\n ${response.statusText}`);

    const body = await response.json();

    // validate response using ZOD

    return body as UserWorkoutPresetType;
  } catch {
    throw new Error("An unexpected error occurred");
  }
}
