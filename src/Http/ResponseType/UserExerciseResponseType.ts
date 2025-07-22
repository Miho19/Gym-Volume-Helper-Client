export type UserExerciseResponseType = {
  exerciseID: string;

  exerciseDetails: {
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
