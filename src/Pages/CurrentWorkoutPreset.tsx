import CurrentWorkoutPresetExerciseList from "../Components/WorkoutPreset/CurrentWorkoutPreset/CurrentWorkoutPresetExerciseList";
import WorkoutPresetHeader from "../Components/WorkoutPreset/IndivdualWorkoutPreset/WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "../Components/WorkoutPreset/IndivdualWorkoutPreset/WorkoutPresetOwnerPanel";
import useInitialiseUserQuery from "../Hooks/useInitialiseUserQuery";
import useWorkoutPresetQuery from "../Hooks/useWorkoutPresetQuery";

function CurrentWorkoutPresetPage() {
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
  } = useInitialiseUserQuery();

  if (isLoadingUser) return <div>Loading...</div>;
  if (isErrorUser) return <div>{errorUser?.message}</div>;

  const { currentWorkoutID } = user!;

  const {
    data: workout,
    isLoading: isLoadingWorkout,
    isError: isErrorWorkout,
    error: errorWorkout,
  } = useWorkoutPresetQuery({
    workoutID: currentWorkoutID,
  });

  if (isLoadingWorkout) return <div>Loading...</div>;
  if (isErrorWorkout) return <div>{errorWorkout?.message}</div>;

  return (
    <main>
      <WorkoutPresetHeader workout={workout!} />
      <CurrentWorkoutPresetExerciseList workout={workout!} />
      <WorkoutPresetOwnerPanel workout={workout!} />
    </main>
  );
}

export default CurrentWorkoutPresetPage;
