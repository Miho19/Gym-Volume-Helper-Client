import { http, HttpResponse } from "msw";
import { toURL } from ".";
import type { UserProfile } from "../Zod/UserSchema";

export const testUserProfile: UserProfile = {
  name: "Josh April",
  pictureSource: "https://picsum.photos/200/300?grayscale",
  weight: 84,
  currentWorkoutId: "1",
};

type PATCHParams = object;
type POSTBodyType = { auth0ID: string };

export const userHandlers = [
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.post<{}, POSTBodyType, UserProfile>(toURL(`user/me`), () =>
    HttpResponse.json(testUserProfile)
  ),
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.get<{}, {}, UserProfile>(toURL(`user/me`), () =>
    HttpResponse.json(testUserProfile)
  ),

  http.put<PATCHParams, UserProfile, UserProfile>(
    toURL("user/me"),
    async ({ request }) => {
      const requestBody = await request.json();

      if (typeof requestBody.currentWorkoutId !== "undefined")
        testUserProfile.currentWorkoutId = requestBody.currentWorkoutId;

      return HttpResponse.json(testUserProfile);
    }
  ),
];
