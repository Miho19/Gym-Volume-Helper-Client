import { useNavigate } from "react-router";
import useWorkoutPresetQuery from "../../../Hooks/useWorkoutPresetQuery";
import WorkoutPresetExerciseList from "./WorkoutPresetExerciseList";
import WorkoutPresetHeader from "./WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "./WorkoutPresetOwnerPanel";
import useDeleteWorkoutPresetMutation from "../../../Hooks/useDeleteWorkoutPresetMutation";
import useUpdateUserMutation from "../../../Hooks/useUpdateUserMutation";

type Props = {
  workoutID: string;
};
function IndividualWorkoutPreset(props: Props) {
  const navigator = useNavigate();

  const { data, isLoading, isError, error, isSuccess } = useWorkoutPresetQuery({
    workoutID: props.workoutID,
  });

  const deleteWorkoutMutation = useDeleteWorkoutPresetMutation();
  const updateUserMutation = useUpdateUserMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  function handleDeleteWorkout() {
    deleteWorkoutMutation.mutate({ workoutID: props.workoutID });
    navigator("/workout");
  }

  function handleMakeCurrentWorkout() {
    updateUserMutation.mutate({
      updateUserBody: {
        currentWorkoutID: props.workoutID,
        name: undefined,
        picture: undefined,
        weight: undefined,
      },
    });
    navigator("/currentworkout");
  }

  return (
    <section>
      <button onClick={() => navigator("/workout")}>Back</button>
      <button onClick={handleMakeCurrentWorkout}>Make Current Workout</button>
      <WorkoutPresetHeader workout={data} />
      <WorkoutPresetExerciseList workout={data} />
      <WorkoutPresetOwnerPanel workout={data} />
      <button onClick={handleDeleteWorkout}>Delete</button>
    </section>
  );
}

export default IndividualWorkoutPreset;
