export type WorkoutPresetType = {
  id: string;
  ownerID: string;
  name: string;
  exerciseIDList: string[];
  imgURL: string;
};

export type UserWorkoutPresetsResponseType = {
  ownerID: string;
  ownerName: string;
  ownerProfilePictureURL: string;
  items: WorkoutPresetType[];
};
