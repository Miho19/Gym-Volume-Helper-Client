import { useNavigate } from "react-router";
import useWorkoutPresetQuery from "../../../Hooks/useWorkoutPresetQuery";
import WorkoutPresetExerciseList from "./WorkoutPresetExerciseList";
import WorkoutPresetHeader from "./WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "./WorkoutPresetOwnerPanel";

type Props = {
  workoutID: string;
};
function IndividualWorkoutPreset(props: Props) {
  const navigator = useNavigate();

  const { data, isLoading, isError, error, isSuccess } = useWorkoutPresetQuery({
    workoutID: props.workoutID,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  function handleDeleteWorkout() {}

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
