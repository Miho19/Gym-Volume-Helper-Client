import z from "zod";

export const newWorkoutFormZodObject = z.object({
  name: z.string(),
  pictureSource: z.string(),
  exerciseNameList: z.array(z.string()),
});

export type NewWorkoutFormType = z.infer<typeof newWorkoutFormZodObject>;
