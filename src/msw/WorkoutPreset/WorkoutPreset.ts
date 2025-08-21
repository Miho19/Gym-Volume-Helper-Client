import type {
  UserWorkoutPresetListElementType,
  UserWorkoutPresetType,
} from "../../Http/ResponseType/UserWorkoutPresetsResponseType";
import { FullWorkoutPresetHandlers } from "./FullWorkoutPresetHandlers";
import { WorkoutPresetListHandlers } from "./WorkoutPresetListHandlers";

export const workoutPresetHandlers = [
  ...WorkoutPresetListHandlers,
  ...FullWorkoutPresetHandlers,
];

export const testUserWorkoutPresetElementList: UserWorkoutPresetListElementType[] =
  [
    {
      workoutID: "1",
      workoutName: "Preset 1",
      workoutImgURL: "https://picsum.photos/id/237/200/300",
    },
  ];

export const testUserWorkoutPresetList: UserWorkoutPresetType[] = [
  {
    ownerID: "12345",
    ownerName: "Josh April",
    ownerProfilePictureURL: "https://picsum.photos/id/12/2500/1667",
    exerciseIDList: ["VPPtusI", "8d8qJQI", "JGKowMS"],
    workoutID: "1",
    workoutName: "Preset 1",
    workoutImgURL: "https://picsum.photos/id/237/200/300",
  },
];
