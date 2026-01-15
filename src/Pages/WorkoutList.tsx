import { useNavigate } from "react-router";
import HomeButton from "../Components/Navigation/HomeButton";
import WorkoutList from "../Components/Workout/List/WorkoutList";

function WorkoutListPage() {
  const navigator = useNavigate();
  return (
    <main className="mx-auto flex flex-col p-5 min-h-screen justify-between gap-y-5">
      <button
        onClick={() => navigator("/newworkout")}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 bg-[#31363F] flex flex-col justify-center items-center"
      >
        Create Workout Preset
      </button>

      <WorkoutList />

      <HomeButton />
    </main>
  );
}

export default WorkoutListPage;
