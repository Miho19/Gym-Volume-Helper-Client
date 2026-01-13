import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  NewWorkoutPresetFormDataType,
  UserWorkoutPresetListElementType,
  UserWorkoutPresetType,
} from "../../Http/Response/UserWorkoutPresetsResponseType";
import {
  getNewWorkoutID,
  testUserWorkoutPresetElementList,
  testUserWorkoutPresetList,
} from "./WorkoutPreset";

type POSTParams = {};

export const WorkoutPresetListPOSTHandlers = [
  http.post<POSTParams, NewWorkoutPresetFormDataType, undefined>(
    toURL("/me/workout/"),
    async ({ request }) => {
      const requestBody = await request.json();

      const newWorkoutID = String(getNewWorkoutID(testUserWorkoutPresetList));

      const newUserWorkoutPresetElement: UserWorkoutPresetListElementType = {
        workoutID: newWorkoutID,
        workoutName: requestBody.workoutName,
        workoutImgURL: requestBody.workoutPicture,
      };

      testUserWorkoutPresetElementList.push(newUserWorkoutPresetElement);

      const newWorkoutPreset: UserWorkoutPresetType = {
        ownerID: "12345",
        ownerName: "Josh April",
        ownerProfilePictureURL: "https://picsum.photos/id/12/2500/1667",
        exerciseIDList: requestBody.exerciseNameList,
        workoutID: newWorkoutID,
        workoutName: requestBody.workoutName,
        workoutImgURL: requestBody.workoutPicture,
      };

      testUserWorkoutPresetList.push(newWorkoutPreset);

      return new HttpResponse("ok", { status: 200 });
    }
  ),
];
