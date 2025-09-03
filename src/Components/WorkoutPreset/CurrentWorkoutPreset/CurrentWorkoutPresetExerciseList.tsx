import react from "react";
import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import CurrentWorkoutPresetExerciseListElement from "./CurrentWorkoutPresetExerciseListElement";

type Props = {
  workout: UserWorkoutPresetType;
};

function CurrentWorkoutPresetExerciseList(props: Props) {
  const { exerciseIDList } = props.workout;

  const exerciseElements = exerciseIDList.map((exerciseID: string) => (
    <CurrentWorkoutPresetExerciseListElement exerciseID={exerciseID} />
  ));

  return (
    <section>
      <ul>{exerciseElements}</ul>
    </section>
  );
}

export default CurrentWorkoutPresetExerciseList;
