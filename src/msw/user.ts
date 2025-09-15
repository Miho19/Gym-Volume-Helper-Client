import { http, HttpResponse } from "msw";
import { toURL } from ".";
import type {
  UserBodyResponseTypePATCH,
  UserBodyResponseTypePOST,
} from "../Http/ResponseType/UserResponseType";

let testUser: UserBodyResponseTypePOST = {
  name: "Josh April",
  picture: "https://picsum.photos/200/300?grayscale",
  weight: "84",
  currentWorkoutID: "1",
};

type PATCHParams = {};

export const userHandlers = [
  http.post(toURL("/auth/"), postUserResolver),
  http.patch<PATCHParams, UserBodyResponseTypePATCH, UserBodyResponseTypePOST>(
    toURL("/auth"),
    async ({ request }) => {
      const requestBody = await request.json();

      if (typeof requestBody.currentWorkoutID !== "undefined")
        testUser.currentWorkoutID = requestBody.currentWorkoutID;

      return HttpResponse.json(testUser);
    }
  ),
];

function postUserResolver() {
  return HttpResponse.json(testUser);
}
