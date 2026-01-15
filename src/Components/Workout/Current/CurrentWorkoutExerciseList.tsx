import react from "react";
import CurrentWorkoutPresetExerciseListElement from "./CurrentWorkoutExerciseListElement";
import useWorkoutPresetExerciseList from "../../../Hooks/useWorkoutPresetExerciseList";
import type { Workout } from "../../../Zod/WorkoutSchema";

type Props = {
  workout: Workout;
};

function CurrentWorkoutExerciseList(props: Props) {
  const { workoutId } = props.workout;

  // const { data, isLoading, isError, error } = useWorkoutPresetExerciseList({
  //   workoutID,
  //   exerciseList: exerciseIDList,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>error: {error.message}</div>;

  // const currentWorkoutPresetExerciseListElements = data?.items.map(
  //   (exercise: ExerciseListElement) => (
  //     <CurrentWorkoutPresetExerciseListElement
  //       exercise={exercise}
  //       numberOfDisplayedMetrics={1}
  //     />
  //   )
  // );

  const currentWorkoutPresetExerciseListElements: [] = [];

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {currentWorkoutPresetExerciseListElements}
      </ul>
    </section>
  );
}

export default CurrentWorkoutExerciseList;
