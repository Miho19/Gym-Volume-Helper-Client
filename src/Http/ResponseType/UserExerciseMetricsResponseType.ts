export type ExerciseMetric = {
  exerciseID: string;
  metricID: string;
  dateTime: Date;
  weight: number[];
  reps: number[];
};

export type UserExerciseMetricsResponseType = {
  exerciseID: string;
  items: ExerciseMetric[];
};
