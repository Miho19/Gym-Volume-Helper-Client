import react from "react";
import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  exercise: ExerciseListElement;
};

function CurrentWorkoutPresetExerciseListElement(props: Props) {
  const { exercise } = props;

  return <ul></ul>;
}

export default CurrentWorkoutPresetExerciseListElement;
