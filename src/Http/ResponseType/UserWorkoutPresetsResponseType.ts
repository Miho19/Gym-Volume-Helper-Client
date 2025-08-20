export type UserWorkoutPresetType = {
  ownerID: string;
  ownerName: string;
  ownerProfilePictureURL: string;

  exerciseIDList: string[];

  workoutID: string;
  workoutName: string;
  workoutImgURL: string;
};

export type UserWorkoutPresetListElementType = {
  workoutID: string;
  workoutName: string;
  workoutImgURL: string;
};

export type UserWorkoutPresetListResponseType = {
  userID: string;
  userName: string;
  items: UserWorkoutPresetListElementType[];
};
