import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type { ExerciseListElement } from "../../Components/Exercise/ExerciseTypes";
import type { ExerciseListResponseGET } from "../../Http/ResponseType/ExerciseListResponseType";

export const exerciseListHandlers = [
  http.get(toURL("/me/exercise"), getExerciseList),
];

function getExerciseList() {
  const bodyResponse: ExerciseListResponseGET = {
    index: 0,
    next: null,
    items: exerciseList,
    limit: 0,
  };
  return HttpResponse.json(bodyResponse);
}

const exerciseList: ExerciseListElement[] = [
  {
    name: "Incline Hammer Curls",
    img: "https://static.strengthlevel.com/images/exercises/incline-hammer-curl/incline-hammer-curl-800.jpg",
    pageLink: "/exercise/1",
    id: "K6NnTv0",
  },
];
