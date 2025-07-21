import type { UserExerciseResponseType } from "../ResponseType/UserExerciseResponseType";

export async function GETUserExercise(
  exerciseID: string
): Promise<UserExerciseResponseType> {
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
    ? `http://localhost:5052/me/exercise/${exerciseID}`
    : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok)
      throw new Error(`Failed to fetch user exercise ${exerciseID}`);

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserExerciseResponseType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error(`Failed to fetch user exercise ${exerciseID}`);
  }
}
