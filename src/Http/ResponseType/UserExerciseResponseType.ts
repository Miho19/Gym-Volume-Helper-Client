export type UserExerciseResponseType = {
  exerciseID: string;

  exerciseDetails: UserExerciseResponseExerciseDetailsType;

  userExerciseMetrics: UserExerciseMetrics;
};

export type UserExerciseResponseExerciseDetailsType = {
  name: string;
  imgURL: string;
  equipment: string[];
  bodyParts: string[];
  targetMuscle: string[];
  secondaryMuscles: string[];
  videoURL: string;
  instructions: string[];
  exerciseTips: string[];
  relatedExercises: string[];
  overview: string;
};

export type UserExerciseMetrics = {
  weight: UserExerciseTrend[];
  reps: UserExerciseTrend[];
  sets: UserExerciseTrend[];
};

export type UserExerciseTrend = {
  dateTime: Date;
  value: number;
};
