import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type { UserWorkoutPresetListResponseType } from "../../Http/Response/UserWorkoutPresetsResponseType";
import { testUserWorkoutPresetElementList } from "./WorkoutPreset";

export const WorkoutPresetListHandlers = [
  http.get(toURL("/me/workout/"), getWorkoutPresetList),
];

function getWorkoutPresetList() {
  const bodyResponse: UserWorkoutPresetListResponseType = {
    userID: "12345",
    userName: "Josh April",
    items: testUserWorkoutPresetElementList,
  };

  return HttpResponse.json(bodyResponse);
}
