import { http, HttpResponse } from "msw";
import { toURL } from "../..";
import type { Exercise } from "../../../Zod/ExerciseSchema";
import { workoutExerciseLookupTable } from "../ExerciseExamples";

export const exerciseDetailHandlers = [
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.get<{ workoutId: string }, {}, Exercise[]>(
    toURL("workout/:workoutId/exercise"),
    async ({ params }) => {
      const { workoutId } = params;

      if (!workoutExerciseLookupTable.has(workoutId))
        return new HttpResponse(null, { status: 404, statusText: "Not Found" });

      const exerciseList = workoutExerciseLookupTable.get(workoutId);

      return HttpResponse.json(exerciseList);
    },
  ),
];
