import useUserWorkoutList from "../../../Hooks/Workout/useUserWorkoutList";
import type { Workout } from "../../../Zod/WorkoutSchema";
import WorkoutListElement from "./WorkoutListElement";

function WorkoutList() {
  const { data, isLoading, isError, error, isSuccess } = useUserWorkoutList();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !isSuccess) return <div>Error: {error?.message}</div>;

  const workoutList = data.map((workout: Workout) => (
    <WorkoutListElement key={workout.id} workout={workout} />
  ));

  return (
    <section className="h-full w-full flex-1 flex flex-col overflow-y-scroll">
      <ul className="flex flex-col gap-y-5">{workoutList}</ul>
    </section>
  );
}

export default WorkoutList;
