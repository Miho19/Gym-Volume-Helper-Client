import z from "zod";

export const exerciseMetricSetZodObject = z.object({
  weight: z.number(),
  repetitions: z.number(),
});

export const exerciseMetricZodObject = z.object({
  exerciseId: z.string(),
  workoutId: z.string(),
  dateTime: z.date(),
  sets: z.array(exerciseMetricSetZodObject),
});

export type ExerciseMetricSet = z.infer<typeof exerciseMetricSetZodObject>;
export type ExerciseMetric = z.infer<typeof exerciseMetricZodObject>;
