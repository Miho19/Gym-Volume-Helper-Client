import { UserProfileZodObj, type UserProfile } from "../../../Zod/UserSchema";
import { BASEADDRESS } from "../BaseURLAddress";

const ENDPOINT: string = `${BASEADDRESS}/user/me`;

function generateFetchOptions(): RequestInit {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    credentials: "include",
  };

  return fetchOptions;
}

export async function GetUseProfile(): Promise<UserProfile> {
  try {
    const fetchOptions = generateFetchOptions();

    const authResponse = await fetch(ENDPOINT, fetchOptions);
    if (!authResponse.ok) throw new Error("Failed to Fetch User Profile");

    const authResponseBody = await authResponse.json();

    const result = await UserProfileZodObj.parseAsync(authResponseBody);
    return result;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to Fetch User Profile");
  }
}
