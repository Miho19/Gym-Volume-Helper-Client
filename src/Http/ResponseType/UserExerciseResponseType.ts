export type UserExerciseResponseType = {
  exerciseID: string;

  exerciseDetails: UserExerciseResponseExerciseDetailsType;

  userExerciseDetails: {
    weight: UserExerciseTrend[];
    reps: UserExerciseTrend[];
    sets: UserExerciseTrend[];
  };
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

export type UserExerciseTrend = {
  dateTime: Date;
  value: number;
};
