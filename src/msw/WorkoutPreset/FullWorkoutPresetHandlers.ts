import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type { UserWorkoutPresetType } from "../../Http/Response/UserWorkoutPresetsResponseType";
import { testUserWorkoutPresetList } from "./WorkoutPreset";

type GETWorkoutParams = {
  workoutID: string;
};

export const FullWorkoutPresetHandlers = [
  http.get<GETWorkoutParams, undefined, UserWorkoutPresetType>(
    toURL("/me/workout/:workoutID"),
    ({ params }) => {
      const { workoutID } = params;

      const workoutPreset = testUserWorkoutPresetList.find(
        (workout) => workout.workoutID === workoutID
      );

      if (typeof workoutPreset === "undefined") return HttpResponse.error();

      return HttpResponse.json(workoutPreset);
    }
  ),
];
