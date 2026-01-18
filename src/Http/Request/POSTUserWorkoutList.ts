import {
  newWorkoutFormZodObject,
  type NewWorkoutFormType,
} from "../../Zod/NewWorkoutFormSchema";
import { GETUSERWORKOUTLISTENDPOINT } from "./Workout/GETUserWorkoutList";

async function generateFetchOptions(
  formData: NewWorkoutFormType
): Promise<RequestInit> {
  try {
    const result = await newWorkoutFormZodObject.parseAsync(formData);

    const fetchOptions: RequestInit = {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(result),
      credentials: "include",
    };

    return fetchOptions;
  } catch (error) {
    throw new Error(
      `Unexpected error\n ${error instanceof Error && error.message}`
    );
  }
}

export const POSTUSERWORKOUTLISTENDPOINT = GETUSERWORKOUTLISTENDPOINT;

export async function POSTUserWorkoutList(
  newWorkoutFormData: NewWorkoutFormType
) {
  try {
    const fetchOptions = await generateFetchOptions(newWorkoutFormData);

    const response: Response = await fetch(
      POSTUSERWORKOUTLISTENDPOINT,
      fetchOptions
    );

    if (!response.ok)
      throw new Error(
        `Unexpected response from server: ${response.statusText}`
      );

    return;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred\n${error instanceof Error && error.message}`
    );
  }
}
