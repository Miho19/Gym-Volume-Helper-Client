export type ExerciseListElement = {
  id: string;
  name: string;
  img: string;
  pageLink: string;
};

export type NewWorkoutPresetFormDataType = {
  workoutName: string;
  workoutPicture: string;
  exerciseNameList: string[];
};

export type ExerciseListResponseGET = {
  limit: number;
  index: number;
  next: number | null;
  items: ExerciseListElement[];
};
