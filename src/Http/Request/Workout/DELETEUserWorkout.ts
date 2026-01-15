import { BASEADDRESS } from "../BaseURLAddress";

function generateFetchOptions(): RequestInit {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  return fetchOptions;
}

export function DELETEUserWorkoutEndpoint(workoutId: string | undefined): URL {
  if (typeof workoutId === "undefined")
    throw new Error("Workout Id is undefined");
  return new URL(`workout/${workoutId}`, BASEADDRESS);
}

export async function DELETEUserWorkout(workoutId: string) {
  try {
    const fetchOptions = generateFetchOptions();
    const endpoint = DELETEUserWorkoutEndpoint(workoutId);

    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(`Unexpected error\n ${response.statusText}`);

    return;
  } catch (error) {
    throw new Error(
      `Failed to delete user workout\n${
        error instanceof Error && error.message
      }`
    );
  }
}
