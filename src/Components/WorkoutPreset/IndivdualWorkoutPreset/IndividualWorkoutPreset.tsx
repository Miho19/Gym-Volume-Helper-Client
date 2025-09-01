import { useNavigate } from "react-router";
import useWorkoutPresetQuery from "../../../Hooks/useWorkoutPresetQuery";
import WorkoutPresetExerciseList from "./WorkoutPresetExerciseList";
import WorkoutPresetHeader from "./WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "./WorkoutPresetOwnerPanel";
import useDeleteWorkoutPresetMutation from "../../../Hooks/useDeleteWorkoutPresetMutation";

type Props = {
  workoutID: string;
};
function IndividualWorkoutPreset(props: Props) {
  const navigator = useNavigate();

  const { data, isLoading, isError, error, isSuccess } = useWorkoutPresetQuery({
    workoutID: props.workoutID,
  });

  const mutation = useDeleteWorkoutPresetMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  function handleDeleteWorkout() {
    mutation.mutate({ workoutID: props.workoutID });
    navigator("/workout");
  }

  return (
    <section>
      <button onClick={() => navigator("/workout")}>Back</button>
      <WorkoutPresetHeader workout={data} />
      <WorkoutPresetExerciseList workout={data} />
      <WorkoutPresetOwnerPanel workout={data} />
      <button onClick={handleDeleteWorkout}>Delete</button>
    </section>
  );
}

export default IndividualWorkoutPreset;
