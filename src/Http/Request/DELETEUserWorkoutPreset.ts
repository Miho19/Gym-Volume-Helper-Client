export async function DELETEUserWorkoutPreset(workoutID: string) {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ workoutID }),
  };

  const URL = import.meta.env.DEV ? `http://localhost:5052/me/workout/` : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to delete user workout");

    return;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to delete user workout");
  }
}
