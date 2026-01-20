import type { Workout } from "../../../Zod/WorkoutSchema";
import useWorkoutExerciseList from "../../../Hooks/Exercise/useWorkoutExerciseList";
import CurrentWorkoutExerciseListElement from "./CurrentWorkoutExerciseListElement";

type Props = {
  workout: Workout;
};

function CurrentWorkoutExerciseList(props: Props) {
  const { id: workoutId } = props.workout;
  const { data, isSuccess, isError, isLoading, error } =
    useWorkoutExerciseList(workoutId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !isSuccess) return <div>Error: {error?.message}</div>;

  const currentWorkoutPresetExerciseListElements = data.map((e) => (
    <CurrentWorkoutExerciseListElement
      key={e.exerciseId}
      exercise={e}
      numberOfDisplayedMetrics={3}
    />
  ));

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {currentWorkoutPresetExerciseListElements}
      </ul>
    </section>
  );
}

export default CurrentWorkoutExerciseList;
