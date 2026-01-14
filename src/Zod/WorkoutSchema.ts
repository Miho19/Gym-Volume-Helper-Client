import z from "zod";

export const workoutZodObject = z.object({
  id: z.string(),
  name: z.string(),
  pictureSource: z.string(),
  ownerId: z.string(),
  ownerName: z.string(),
  ownerPictureSource: z.string(),
});

export const workoutZodObjectArray = z.array(workoutZodObject);
export type Workout = z.infer<typeof workoutZodObject>;
