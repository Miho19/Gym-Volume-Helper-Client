import type { UserWorkoutPresetListResponseType } from "../Response/UserWorkoutPresetsResponseType";

export async function GETUserWorkoutPresetList(): Promise<UserWorkoutPresetListResponseType> {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const URL = import.meta.env.DEV ? `http://localhost:5052/me/workout/` : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error(`Failed to fetch user workout presets`);

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserWorkoutPresetListResponseType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error(`Failed to fetch user workout presets`);
  }
}
