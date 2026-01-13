import { http, HttpResponse } from "msw";
import { toURL } from ".";
import type { UserProfile } from "../Zod/UserSchema";

export const testUser: UserProfile = {
  name: "Josh April",
  pictureSource: "https://picsum.photos/200/300?grayscale",
  weight: 84,
  currentWorkoutId: "1",
};

type PATCHParams = object;

export const userHandlers = [
  http.post(toURL("/auth/"), postUserResolver),
  http.patch<PATCHParams, UserProfile, UserProfile>(
    toURL("/auth"),
    async ({ request }) => {
      const requestBody = await request.json();

      if (typeof requestBody.currentWorkoutId !== "undefined")
        testUser.currentWorkoutId = requestBody.currentWorkoutId;

      return HttpResponse.json(testUser);
    }
  ),
];

function postUserResolver() {
  return HttpResponse.json(testUser);
}
