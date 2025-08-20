export type WorkoutPresetType = {
  id: string;
  ownerID: string;
  ownerName: string;
  ownerProfilePictureURL: string;
  name: string;
  exerciseIDList: string[];
  imgURL: string;
};

export type UserWorkoutPresetListResponseType = {
  userID: string;
  userName: string;
  items: WorkoutPresetType[];
};
