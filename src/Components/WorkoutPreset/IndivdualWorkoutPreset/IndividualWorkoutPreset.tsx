import useWorkoutPresetQuery from "../../../Hooks/useWorkoutPresetQuery";
import WorkoutPresetOwnerPanel from "./WorkoutPresetOwnerPanel";

type Props = {
  workoutID: string;
};
function IndividualWorkoutPreset(props: Props) {
  const { data, isLoading, isError, error } = useWorkoutPresetQuery({
    workoutID: props.workoutID,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  return (
    <section>
      <WorkoutPresetOwnerPanel workout={data!} />
    </section>
  );
}

export default IndividualWorkoutPreset;
