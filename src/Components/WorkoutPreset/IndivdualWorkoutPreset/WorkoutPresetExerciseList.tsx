import type { Workout } from "../../../Zod/WorkoutSchema";

type Props = {
  workout: Workout;
};

function WorkoutPresetExerciseList(props: Props) {
  const { workout } = props;

  // const { data, isLoading, isError, error, isSuccess } =
  //   useWorkoutPresetExerciseList({
  //     workoutID: workout.workoutID,
  //     exerciseList: workout.exerciseIDList,
  //   });

  // const exerciseList = data.items.map((exercise: ExerciseListElement) => (
  //   <WorkoutPresetExerciseListElement key={exercise.id} exercise={exercise} />
  // ));

  const exerciseList: string[] = ["hello"];

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {exerciseList}
      </ul>
    </section>
  );
}

export default WorkoutPresetExerciseList;
