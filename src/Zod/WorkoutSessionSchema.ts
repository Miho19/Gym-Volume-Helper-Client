import z from "zod";

export const workoutSessionSetZodObject = z.object({
  weight: z.number(),
  repetitions: z.number(),
});

export const workoutSessionZodObject = z.object({
  sessionId: z.string(),
  exerciseId: z.string(),
  workoutId: z.string(),
  dateTime: z.date(),
  sets: z.array(workoutSessionSetZodObject),
});

export type WorkoutSessionSet = z.infer<typeof workoutSessionSetZodObject>;
export type WorkoutSession = z.infer<typeof workoutSessionZodObject>;
