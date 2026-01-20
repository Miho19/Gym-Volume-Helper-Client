import z from "zod";

export const exerciseZodObject = z.object({
  exerciseId: z.string(),
  name: z.string(),
  videoUrl: z.string(),
  imageUrl: z.string(),
});

export const exerciseZobObjectArray = z.array(exerciseZodObject);

export type Exercise = z.infer<typeof exerciseZodObject>;
