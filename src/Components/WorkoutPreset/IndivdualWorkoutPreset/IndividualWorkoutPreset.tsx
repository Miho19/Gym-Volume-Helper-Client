import useWorkoutPresetQuery from "../../../Hooks/useWorkoutPresetQuery";
import WorkoutPresetHeader from "./WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "./WorkoutPresetOwnerPanel";

type Props = {
  workoutID: string;
};
function IndividualWorkoutPreset(props: Props) {
  const { data, isLoading, isError, error, isSuccess } = useWorkoutPresetQuery({
    workoutID: props.workoutID,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  return (
    <section>
      <WorkoutPresetHeader workout={data} />
      <WorkoutPresetOwnerPanel workout={data} />
    </section>
  );
}

export default IndividualWorkoutPreset;
