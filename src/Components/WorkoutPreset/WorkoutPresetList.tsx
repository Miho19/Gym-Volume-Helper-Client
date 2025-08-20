import useUserWorkoutPresetList from "../../Hooks/useUserWorkoutPresetList";
import type { UserWorkoutPresetListElementType } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";
import WorkoutPresetListElement from "./WorkoutPresetListElement";

function WorkoutPresetList() {
  const { data, isLoading, isError, error } = useUserWorkoutPresetList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const workoutList = data?.items.map(
    (workout: UserWorkoutPresetListElementType) => (
      <WorkoutPresetListElement key={workout.workoutID} workout={workout} />
    )
  );

  return (
    <section>
      <ul>{workoutList}</ul>
    </section>
  );
}

export default WorkoutPresetList;
