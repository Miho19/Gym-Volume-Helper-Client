import { userProfileZodObj, type UserProfile } from "../../../Zod/UserSchema";
import { BASEADDRESS } from "../BaseURLAddress";

export const PUTUSERPROFILEENDPOINT: URL = new URL("user/me", BASEADDRESS);

function generateFetchOptions(userProfile: UserProfile) {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile),
    credentials: "include",
  };

  return fetchOptions;
}

export async function PUTUserProfile(
  userProfile: UserProfile,
  endpoint: URL = PUTUSERPROFILEENDPOINT
): Promise<UserProfile> {
  try {
    const requestUserProfileValidated = userProfileZodObj.parse(userProfile);

    const fetchOptions = generateFetchOptions(requestUserProfileValidated);

    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error("Failed to fetch user");
    const responseBody = await response.json();

    const result = await userProfileZodObj.parseAsync(responseBody);
    return result;
  } catch {
    throw new Error("An unexpected error occurred");
  }
}
