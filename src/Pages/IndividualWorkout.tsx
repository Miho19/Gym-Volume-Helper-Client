import { useNavigate, useParams } from "react-router";
import useDeleteWorkoutPresetMutation from "../Hooks/useDeleteWorkoutPresetMutation";
import useUpdateUserMutation from "../Hooks/useUpdateUserMutation";
import useWorkoutQuery from "../Hooks/Workout/useWorkoutQuery";
import WorkoutHeader from "../Components/Workout/Individual/WorkoutHeader";
import WorkoutExerciseList from "../Components/Workout/Individual/WorkoutExerciseList";
import WorkoutOwnerPanel from "../Components/Workout/Individual/WorkoutOwnerPanel";

function IndividualWorkoutPresetPage() {
  const { id } = useParams();
  const navigator = useNavigate();

  const deleteWorkoutMutation = useDeleteWorkoutPresetMutation();
  // const updateUserMutation = useUpdateUserMutation();

  const { data, isLoading, isError, error, isSuccess } = useWorkoutQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  if (!isSuccess) return <div>error fetching</div>;

  function handleDeleteWorkout() {
    deleteWorkoutMutation.mutate({ workoutID: id! });
    navigator("/workout");
  }

  function handleMakeCurrentWorkout() {
    // updateUserMutation.mutate({
    //   updateUserBody: {
    //     currentWorkoutID: id!,
    //     name: undefined,
    //     picture: undefined,
    //     weight: undefined,
    //   },
    // });
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

      <WorkoutHeader workout={data} />
      <WorkoutExerciseList workout={data} />
      <WorkoutOwnerPanel workout={data} />

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

export default IndividualWorkoutPresetPage;
