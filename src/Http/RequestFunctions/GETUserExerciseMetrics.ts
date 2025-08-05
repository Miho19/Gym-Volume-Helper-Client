import type { UserExerciseMetricsResponseType } from "../ResponseType/UserExerciseMetricsResponseType";

export async function GETUserExerciseMetrics(
  exerciseID: string
): Promise<UserExerciseMetricsResponseType> {
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
      throw new Error(`Failed to fetch user exercise ${exerciseID} metrics`);

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserExerciseMetricsResponseType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error(`Failed to fetch user exercise ${exerciseID} metrics`);
  }
}
