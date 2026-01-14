import HomeButton from "../Components/Navigation/HomeButton";
import CurrentWorkoutPresetExerciseList from "../Components/WorkoutPreset/CurrentWorkoutPreset/CurrentWorkoutPresetExerciseList";
import WorkoutPresetHeader from "../Components/WorkoutPreset/IndivdualWorkoutPreset/WorkoutPresetHeader";
import WorkoutPresetOwnerPanel from "../Components/WorkoutPreset/IndivdualWorkoutPreset/WorkoutPresetOwnerPanel";
import useUserProfileQuery from "../Hooks/User/useUserProfileQuery";
import useWorkoutQuery from "../Hooks/Workout/useWorkoutQuery";

function CurrentWorkoutPresetPage() {
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

  const currentDate = new Date().toDateString();

  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-y-5 p-5 min-h-screen">
      <WorkoutPresetHeader workout={workout} />

      <p className="w-full text-center border border-white/5 bg-[#31363F] rounded-lg">
        {currentDate}
      </p>

      <CurrentWorkoutPresetExerciseList workout={workout} />
      <WorkoutPresetOwnerPanel workout={workout} />
      <HomeButton />
    </main>
  );
}

export default CurrentWorkoutPresetPage;
