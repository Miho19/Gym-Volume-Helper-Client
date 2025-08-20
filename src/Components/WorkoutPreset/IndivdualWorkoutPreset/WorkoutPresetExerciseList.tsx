import useWorkoutPresetExerciseList from "../../../Hooks/useWorkoutPresetExerciseList";
import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

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

  return <section style={{ border: "1px solid white" }}></section>;
}

export default WorkoutPresetExerciseList;
