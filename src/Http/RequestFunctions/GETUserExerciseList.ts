import type { ExerciseListResponseGET } from "../ResponseType/ExerciseListResponseType";

export async function GETUserExerciseList(
  limit: number
): Promise<ExerciseListResponseGET> {
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
    ? `http://localhost:5052/me/exercise?limit=${limit}`
    : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to fetch user exercise list");

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as ExerciseListResponseGET;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to fetch user exercise list");
  }
}
