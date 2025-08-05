export type ExerciseDetailsType = {
  name: string;
  imgURL: string;
  equipment: string[];
  bodyParts: string[];
  targetMuscle: string[];
  secondaryMuscles: string[];
  videoURL: string;
  instructions: string[];
  exerciseTips: string[];
  relatedExercises: string[];
  overview: string;
};

export type ExerciseDetailsResponseType = {
  exerciseID: string;
  item: ExerciseDetailsType;
};
