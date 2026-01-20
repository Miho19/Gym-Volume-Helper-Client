import HomeButton from "../Components/Navigation/HomeButton";
import WorkoutExerciseList from "../Components/Workout/Individual/WorkoutExerciseList";
import WorkoutHeader from "../Components/Workout/Individual/WorkoutHeader";
import WorkoutOwnerPanel from "../Components/Workout/Individual/WorkoutOwnerPanel";
import useUserProfileQuery from "../Hooks/User/useUserProfileQuery";
import useWorkoutQuery from "../Hooks/Workout/useWorkoutQuery";

function CurrentWorkoutPage() {
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
  } = useUserProfileQuery();

  const {
    data: workout,
    isLoading: isLoadingWorkout,
    isError: isErrorWorkout,
    error: errorWorkout,
    isSuccess,
  } = useWorkoutQuery(user?.currentWorkoutId);

  if (isLoadingUser) return <div>Loading...</div>;
  if (isErrorUser) return <div>{errorUser?.message}</div>;

  if (isLoadingWorkout) return <div>Loading...</div>;
  if (isErrorWorkout || !isSuccess) return <div>{errorWorkout?.message}</div>;

  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-y-5 p-5 min-h-screen">
      <WorkoutHeader workout={workout} />
      <WorkoutExerciseList workout={workout} />
      <WorkoutOwnerPanel workout={workout} />
      <HomeButton />
    </main>
  );
}

export default CurrentWorkoutPage;
