import type { ExerciseListElement } from "../../Components/Exercise/ExerciseTypes";

/**
 *
 * Implement ZOD later
 *
 */
export type ExerciseListResponseGET = {
  limit: number;
  index: number;
  next: number | null;
  items: ExerciseListElement[];
};
