import { http, HttpResponse } from "msw";
import { toURL } from "..";
import { userWorkoutList } from "./WorkoutExamples";

export const userWorkoutListHandlers = [
  http.get(toURL("user/me/workout"), getUserWorkoutList),
];

function getUserWorkoutList() {
  return HttpResponse.json(userWorkoutList);
}
