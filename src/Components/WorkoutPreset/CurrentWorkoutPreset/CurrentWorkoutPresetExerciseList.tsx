import react from "react";
import type {
  ExerciseListElement,
  UserWorkoutPresetType,
} from "../../../Http/Response/UserWorkoutPresetsResponseType";
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

  const currentWorkoutPresetExerciseListElements = data?.items.map(
    (exercise: ExerciseListElement) => (
      <CurrentWorkoutPresetExerciseListElement
        exercise={exercise}
        numberOfDisplayedMetrics={1}
      />
    )
  );

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {currentWorkoutPresetExerciseListElements}
      </ul>
    </section>
  );
}

export default CurrentWorkoutPresetExerciseList;
