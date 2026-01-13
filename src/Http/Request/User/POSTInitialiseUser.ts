import { UserProfileZodObj, type UserProfile } from "../../../Zod/UserSchema";
import { BASEADDRESS } from "../BaseURLAddress";

const ENDPOINT: URL = new URL(`${BASEADDRESS}/user/me`);

function GenerateFetchOptions(userSub: string): RequestInit {
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

  return fetchOptions;
}

export async function POSTInitialiseUser(
  userSub: string | undefined
): Promise<UserProfile> {
  if (typeof userSub === "undefined")
    throw new Error("Initialise User Requires a UserSub");

  try {
    const fetchOptions = GenerateFetchOptions(userSub);
    const authResponse = await fetch(ENDPOINT, fetchOptions);
    if (!authResponse.ok) throw new Error("Failed to Fetch User Profile");

    const responseBody = await authResponse.json();

    const result = await UserProfileZodObj.parseAsync(responseBody);
    return result;
  } catch (error) {
    if (error instanceof Error) console.error(error);
    throw new Error("An unexpected error occurred");
  }
}
