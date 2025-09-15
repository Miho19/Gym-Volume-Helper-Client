import react from "react";
import type {
  ExerciseListElement,
  UserWorkoutPresetType,
} from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import CurrentWorkoutPresetExerciseListElement from "./CurrentWorkoutPresetExerciseListElement";
import useWorkoutPresetExerciseList from "../../../Hooks/useWorkoutPresetExerciseList";

type Props = {
  workout: UserWorkoutPresetType;
};

function CurrentWorkoutPresetExerciseList(props: Props) {
  const { workoutID, exerciseIDList } = props.workout;

  const { data, isLoading, isError, error } = useWorkoutPresetExerciseList({
    workoutID,
    exerciseList: exerciseIDList,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  const exerciseElements = data?.items.map((exercise: ExerciseListElement) => (
    <CurrentWorkoutPresetExerciseListElement
      exercise={exercise}
      numberOfDisplayedMetrics={1}
    />
  ));

  return (
    <section>
      <ul>{exerciseElements}</ul>
    </section>
  );
}

export default CurrentWorkoutPresetExerciseList;
