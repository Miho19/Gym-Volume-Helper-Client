/**
 *
 * Implement ZOD later
 *
 */
export type UserBodyResponseTypePOST = {
  name: string;
  picture: string;
  weight: string;
  currentWorkoutID: string;
};

export type UserBodyResponseTypePATCH = {
  name: string | undefined;
  picture: string | undefined;
  weight: string | undefined;
  currentWorkoutID: string | undefined;
};
