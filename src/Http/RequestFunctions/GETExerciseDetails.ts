import type {
  ExerciseDetailsResponseType,
  ExerciseDetailsType,
} from "../ResponseType/ExerciseDetailsResponseType";

export async function GETExerciseDetails(
  exerciseID: string
): Promise<ExerciseDetailsType> {
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
    ? `http://localhost:5052/exercise/${exerciseID}`
    : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error(`Failed to fetch exercise ${exerciseID}`);

    const body: ExerciseDetailsResponseType = await response.json();
    const { item } = body;

    // validate response using ZOD

    return item as ExerciseDetailsType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error(`Failed to fetch exercise ${exerciseID}`);
  }
}
