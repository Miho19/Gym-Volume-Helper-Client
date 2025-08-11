export type ExerciseMetric = {
  exerciseID: string;
  metricID: string;
  dateTime: Date;
  sets: ExerciseSetType[];
};

export type ExerciseSetType = {
  weight: number;
  reps: number;
};

export type UserExerciseMetricsResponseType = {
  exerciseID: string;
  items: ExerciseMetric[];
};
