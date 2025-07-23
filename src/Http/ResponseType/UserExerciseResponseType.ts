export type UserExerciseResponseType = {
  exerciseID: string;

  exerciseDetails: UserExerciseResponseExerciseDetailsType;

  userExerciseMetrics: UserExerciseMetrics[];
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
  metricID: string;
  dateTime: Date;
  value: {
    weight: number[];
    reps: number[];
  };
};
