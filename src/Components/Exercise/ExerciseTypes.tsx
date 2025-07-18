export type ExerciseListElement = {
  id: string;
  name: string;
  img: string;
  pageLink: string;

  details: {
    equipment: string[];
    bodyParts: string[];
    targetMuscle: string;
    secondaryMuscles: string;
    videoURL: string;
    instructions: string[];
    tips: string[];
    relatedExercises: string[];
  };
};
