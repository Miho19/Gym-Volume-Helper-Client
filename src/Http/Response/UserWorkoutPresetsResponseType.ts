export type ExerciseListElement = {
  id: string;
  name: string;
  img: string;
  pageLink: string;
};

export type ExerciseListResponseGET = {
  limit: number;
  index: number;
  next: number | null;
  items: ExerciseListElement[];
};
