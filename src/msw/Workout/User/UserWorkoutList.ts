import { http, HttpResponse } from "msw";
import { toURL } from "../..";
import { userWorkoutList } from "../WorkoutExamples";
import type { NewWorkoutFormType } from "../../../Zod/NewWorkoutFormSchema";
import type { Workout } from "../../../Zod/WorkoutSchema";

export const userWorkoutListHandlers = [
  http.get(toURL("user/me/workout"), getUserWorkoutList),
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.post<{}, NewWorkoutFormType, Workout>(
    toURL("user/me/workout"),
    async ({ request }) => {
      const formData = await request.json();

      const newWorkout: Workout = {
        id: crypto.randomUUID(),
        name: formData.name,
        pictureSource: formData.pictureSource,
        ownerId: userWorkoutList[0].ownerId,
        ownerName: userWorkoutList[0].ownerName,
        ownerPictureSource: userWorkoutList[0].ownerPictureSource,
      };

      userWorkoutList.push(newWorkout);

      return HttpResponse.json(newWorkout);
    },
  ),
];

function getUserWorkoutList() {
  return HttpResponse.json(userWorkoutList);
}
