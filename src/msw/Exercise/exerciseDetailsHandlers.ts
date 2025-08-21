import { http, HttpResponse } from "msw";
import { toURL } from "..";

import type { ExerciseListElement } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

type GETMinExerciseParams = {
  exerciseID: string;
};

export const exerciseDetailsHandlers = [
  http.get<GETMinExerciseParams, undefined, ExerciseListElement>(
    toURL("/min/exercise/:id"),
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

const TestMinExerciseListElementList: ExerciseListElement[] = [
  {
    id: "VPPtusI",
    name: "inverted row bent knees",
    img: "https://static.exercisedb.dev/media/VPPtusI.gif",
    pageLink: "VPPtusI",
  },
  {
    id: "8d8qJQI",
    name: "barbell reverse grip incline bench row",
    img: "https://static.exercisedb.dev/media/8d8qJQI.gif",
    pageLink: "8d8qJQI",
  },
  {
    id: "JGKowMS",
    name: "smith narrow row",
    img: "https://static.exercisedb.dev/media/JGKowMS.gif",
    pageLink: "JGKowMS",
  },
];
