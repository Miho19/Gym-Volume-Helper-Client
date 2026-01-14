import * as z from "zod";

export const userProfileZodObj = z.object({
  name: z.string(),
  currentWorkoutId: z.string(),
  pictureSource: z.string(),
  weight: z.number(),
});

export type UserProfile = z.infer<typeof userProfileZodObj>;
