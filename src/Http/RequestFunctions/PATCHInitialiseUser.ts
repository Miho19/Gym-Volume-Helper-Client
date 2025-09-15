import type {
  UserBodyResponseTypePATCH,
  UserBodyResponseTypePOST,
} from "../ResponseType/UserResponseType";

type Params = {
  updateUserBody: UserBodyResponseTypePATCH;
};

export async function PATCHInitialiseUser(
  params: Params
): Promise<UserBodyResponseTypePOST> {
  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params.updateUserBody),
    credentials: "include",
  };

  const URL = import.meta.env.DEV ? "http://localhost:5052/auth/" : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to fetch user");

    const body: unknown = await response.json();

    // validate response using ZOD

    return body as UserBodyResponseTypePOST;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to authenicate user");
  }
}
