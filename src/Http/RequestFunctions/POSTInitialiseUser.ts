import type { UserResponseType } from "../ResponseType/UserResponseType";

export async function POSTInitialiseUser(
  userSub: string | undefined
): Promise<UserResponseType> {
  if (!userSub || userSub === undefined)
    throw new Error("Missing user Sub argument");

  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth0ID: userSub }),
    credentials: "include",
  };

  const URL = import.meta.env.DEV ? "http://localhost:5052/auth/" : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to fetch user");

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserResponseType;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to authenicate user");
  }
}
