import type { UserWorkoutPresetType } from "../ResponseType/UserWorkoutPresetsResponseType";

export async function GETWorkoutPreset(
  workoutID: string
): Promise<UserWorkoutPresetType> {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const URL = import.meta.env.DEV
    ? `http://localhost:5052/me/workout/${workoutID}`
    : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok)
      throw new Error(`Failed to fetch workout preset ${workoutID}`);

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserWorkoutPresetType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error(`Failed to fetch workout preset ${workoutID}`);
  }
}
