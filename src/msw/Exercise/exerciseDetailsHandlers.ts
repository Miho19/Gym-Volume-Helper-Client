import { http, HttpResponse } from "msw";
import { toURL } from "..";

import type { ExerciseListElement } from "../../Http/Response/UserWorkoutPresetsResponseType";
import { TestMinExerciseListElementList } from "./exercise";

type GETMinExerciseParams = {
  exerciseID: string;
};

export const exerciseDetailsHandlers = [
  http.get<GETMinExerciseParams, undefined, ExerciseListElement>(
    toURL("/min/exercise/:exerciseID"),
    ({ params }) => {
      const { exerciseID } = params;

      const exercise = TestMinExerciseListElementList.find(
        (ex) => ex.id === exerciseID
      );
      if (typeof exercise === "undefined") return HttpResponse.error();

      return HttpResponse.json(exercise);
    }
  ),
];
