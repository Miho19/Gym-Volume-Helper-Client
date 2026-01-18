import { useNavigate, useParams } from "react-router";
import useUpdateUserMutation from "../Hooks/User/useUpdateUserMutation";
import useWorkoutQuery from "../Hooks/Workout/useWorkoutQuery";
import WorkoutHeader from "../Components/Workout/Individual/WorkoutHeader";
import WorkoutExerciseList from "../Components/Workout/Individual/WorkoutExerciseList";
import WorkoutOwnerPanel from "../Components/Workout/Individual/WorkoutOwnerPanel";
import useUserProfileQuery from "../Hooks/User/useUserProfileQuery";
import useDeleteWorkoutMutation from "../Hooks/Workout/useDeleteWorkoutMutation";

function IndividualWorkoutPage() {
  const { id } = useParams();
  const navigator = useNavigate();

  const deleteWorkoutMutation = useDeleteWorkoutMutation();
  const updateUserMutation = useUpdateUserMutation();

  const {
    data: workout,
    isLoading: isLWorkoutLoading,
    isError: isWorkoutError,
    error: workoutError,
    isSuccess: isWorkoutSuccess,
  } = useWorkoutQuery(id);

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
    error: UserError,
    isSuccess: isUserSuccess,
  } = useUserProfileQuery();

  if (isLWorkoutLoading || isUserLoading) return <div>Loading...</div>;

  if (isWorkoutError || isUserError || !isUserSuccess || !isWorkoutSuccess)
    return (
      <div>
        <div>{workoutError?.message}</div>
        <div>{UserError?.message}</div>
      </div>
    );

  function handleDeleteWorkout() {
    if (id === undefined) return;
    deleteWorkoutMutation.mutate(id);
    navigator("/workout");
  }

  function handleMakeCurrentWorkout() {
    if (id === undefined) return;
    if (user === undefined) return;

    updateUserMutation.mutate({
      ...user,
      currentWorkoutId: id,
    });
    navigator("/currentworkout");
  }

  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-y-5 p-5 min-h-screen">
      <button
        onClick={() => navigator("/workout")}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
      >
        Back
      </button>

      <WorkoutHeader workout={workout} />
      <WorkoutExerciseList workout={workout} />
      <WorkoutOwnerPanel workout={workout} />

      <button
        onClick={handleMakeCurrentWorkout}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
      >
        Make Current Workout
      </button>
      <button
        onClick={handleDeleteWorkout}
        className="text-red-400 border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
      >
        Delete
      </button>
    </main>
  );
}

export default IndividualWorkoutPage;
