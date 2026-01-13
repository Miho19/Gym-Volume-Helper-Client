import { UserProfileZodObj, type UserProfile } from "../../../Zod/UserSchema";
import { BASEADDRESS } from "../BaseURLAddress";

export const GETUSERPROFILEENDPOINT: URL = new URL("user/me", BASEADDRESS);

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

export async function GETUserProfile(
  endpont: URL = GETUSERPROFILEENDPOINT
): Promise<UserProfile> {
  try {
    const fetchOptions = generateFetchOptions();

    const response = await fetch(endpont, fetchOptions);
    if (!response.ok) throw new Error("Failed to Fetch User Profile");

    const body = await response.json();

    const result = await UserProfileZodObj.parseAsync(body);
    return result;
  } catch {
    throw new Error("Failed to Fetch User Profile");
  }
}
