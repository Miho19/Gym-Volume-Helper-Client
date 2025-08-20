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
    exerciseIDList: ["K6NnTv0", "U0uPZBq", "QD32SbB"],
    workoutID: "1",
    workoutName: "Preset 1",
    workoutImgURL: "https://picsum.photos/id/237/200/300",
  },
];
