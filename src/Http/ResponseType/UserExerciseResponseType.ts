export type UserExerciseResponseType = {
  exerciseID: string;
  exerciseDetails: {
    equipment: string[];
    bodyParts: string[];
    targetMuscle: string;
    secondaryMuscles: string;
    videoURL: string;
    instructions: string[];
    tips: string[];
    relatedExercises: string[];
  };
  userExerciseDetails: {
    weight: UserExerciseTrend[];
    reps: UserExerciseTrend[];
    sets: UserExerciseTrend[];
  };
};

export type UserExerciseTrend = {
  dateTime: Date;
  value: number;
};
