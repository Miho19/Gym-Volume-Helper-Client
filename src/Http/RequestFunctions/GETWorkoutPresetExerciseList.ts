import type { ExerciseListResponseGET } from "../ResponseType/ExerciseListResponseType";
import type { ExerciseListElement } from "../ResponseType/UserWorkoutPresetsResponseType";

export async function GETWorkoutPresetExerciseList(
  exerciseListID: string[]
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

  const exerciseListResponses = await Promise.all(
    exerciseListID.map(async (exerciseID: string) => {
      const URL = import.meta.env.DEV
        ? `http://localhost:5052/exercise/${exerciseID}`
        : "";

      try {
        const response: Response = await fetch(URL, fetchOptions);

        if (!response.ok)
          throw new Error("Failed to fetch workout preset exercise list");

        const body: unknown = await response.json();

        // validate response using ZOD

        return body as ExerciseListElement;
      } catch (error) {
        if (error instanceof Error) console.log(error);
        throw new Error("Failed to fetch workout preset exercise list");
      }
    })
  );

  const bodyResponse: ExerciseListResponseGET = {
    limit: exerciseListResponses.length,
    index: 0,
    next: null,
    items: exerciseListResponses,
  };

  return bodyResponse;
}
