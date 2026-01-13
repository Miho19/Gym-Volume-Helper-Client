import type { NewWorkoutPresetFormDataType } from "../Response/UserWorkoutPresetsResponseType";

export async function POSTUserWorkoutList(input: NewWorkoutPresetFormDataType) {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(input),
    credentials: "include",
  };

  const URL = import.meta.env.DEV ? `http://localhost:5052/me/workout/` : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to update workout preset list");

    return;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to update workout preset list");
  }
}
