import { http, HttpResponse } from "msw";
import { toURL } from "..";

import {
  testUserWorkoutPresetElementList,
  testUserWorkoutPresetList,
  updatetestUserWorkoutPresetElementList,
  updatetestUserWorkoutPresetList,
} from "./WorkoutPreset";

type DELETEParams = {};

type DELETEBodyType = {
  workoutID: string;
};

export const WorkoutPresetListPOSTHandlers = [
  http.delete<DELETEParams, DELETEBodyType, undefined>(
    toURL("/me/workout/"),
    async ({ request }) => {
      const requestBody = await request.json();

      const { workoutID } = requestBody;

      const updatedPresetElementList = testUserWorkoutPresetElementList.filter(
        (workout) => workout.workoutID !== workoutID
      );

      updatetestUserWorkoutPresetElementList(updatedPresetElementList);

      const updatedUserWorkoutPresetList = testUserWorkoutPresetList.filter(
        (workout) => workout.workoutID !== workoutID
      );

      updatetestUserWorkoutPresetList(updatedUserWorkoutPresetList);

      return new HttpResponse("ok", { status: 200 });
    }
  ),
];
