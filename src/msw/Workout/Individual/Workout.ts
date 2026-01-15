import { http, HttpResponse } from "msw";
import { toURL } from "../..";
import { userWorkoutList } from "../WorkoutExamples";
import type { Workout } from "../../../Zod/WorkoutSchema";

export const individualWorkoutHandlers = [
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.get<{ workoutId: string }, {}, Workout>(
    toURL("workout/:workoutId"),
    ({ params }) => {
      const { workoutId } = params;
      const workout = userWorkoutList.find((w) => w.id === workoutId);
      if (workout === undefined)
        return new HttpResponse(null, { status: 404, statusText: "Not Found" });

      return HttpResponse.json(workout);
    }
  ),

  http.delete<{ workoutId: string }>(
    toURL("workout/:workoutId"),
    ({ params }) => {
      const { workoutId } = params;
      const index = userWorkoutList.findIndex((w) => w.id === workoutId);

      if (index === -1)
        return new HttpResponse(null, { status: 404, statusText: "Not Found" });

      userWorkoutList.splice(index, 1);

      return new HttpResponse(null, { status: 200 });
    }
  ),
];
