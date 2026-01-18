import {
  newWorkoutFormZodObject,
  type NewWorkoutFormType,
} from "../../../Zod/NewWorkoutFormSchema";
import { workoutZodObject, type Workout } from "../../../Zod/WorkoutSchema";
import { GETUSERWORKOUTLISTENDPOINT } from "./GETUserWorkoutList";

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
  newWorkoutFormData: NewWorkoutFormType,
  endpoint: URL = POSTUSERWORKOUTLISTENDPOINT
): Promise<Workout> {
  try {
    const fetchOptions = await generateFetchOptions(newWorkoutFormData);

    const response: Response = await fetch(endpoint, fetchOptions);

    if (!response.ok)
      throw new Error(
        `Unexpected response from server: ${response.statusText}`
      );

    const responseBody = await response.json();

    const result = await workoutZodObject.parseAsync(responseBody);

    return result;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred\n${error instanceof Error && error.message}`
    );
  }
}
