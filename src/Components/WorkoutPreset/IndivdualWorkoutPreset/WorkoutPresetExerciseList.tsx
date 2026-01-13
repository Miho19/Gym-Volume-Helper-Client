import useWorkoutPresetExerciseList from "../../../Hooks/useWorkoutPresetExerciseList";
import type {
  ExerciseListElement,
  UserWorkoutPresetType,
} from "../../../Http/Response/UserWorkoutPresetsResponseType";
import WorkoutPresetExerciseListElement from "./WorkoutPresetExerciseListElement";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetExerciseList(props: Props) {
  const { workout } = props;

  const { data, isLoading, isError, error, isSuccess } =
    useWorkoutPresetExerciseList({
      workoutID: workout.workoutID,
      exerciseList: workout.exerciseIDList,
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  const exerciseList = data.items.map((exercise: ExerciseListElement) => (
    <WorkoutPresetExerciseListElement key={exercise.id} exercise={exercise} />
  ));

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {exerciseList}
      </ul>
    </section>
  );
}

export default WorkoutPresetExerciseList;
