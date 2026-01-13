import { UserProfileZodObj, type UserProfile } from "../../../Zod/UserSchema";
import { BASEADDRESS } from "../BaseURLAddress";

const ENDPOINT: string = `${BASEADDRESS}/user/me`;

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
  userProfile: UserProfile
): Promise<UserProfile> {
  try {
    const fetchOptions = generateFetchOptions(userProfile);

    const response: Response = await fetch(ENDPOINT, fetchOptions);
    if (!response.ok) throw new Error("Failed to fetch user");
    const responseBody = await response.json();

    const result = await UserProfileZodObj.parseAsync(responseBody);
    return result;
  } catch (error) {
    if (error instanceof Error) console.error(error);
    throw new Error("An unexpected error occurred");
  }
}
