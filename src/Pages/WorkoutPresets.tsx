import { useNavigate } from "react-router";
import HomeButton from "../Components/Navigation/HomeButton";
import WorkoutPresetList from "../Components/WorkoutPreset/List/WorkoutPresetList";

function WorkoutPresetListPage() {
  const navigator = useNavigate();
  return (
    <main className="mx-auto flex flex-col px-5 mt-5 min-h-screen mb-5">
      <button
        onClick={() => navigator("/newworkout")}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
      >
        New Workout Preset
      </button>

      <WorkoutPresetList />

      <HomeButton />
    </main>
  );
}

/**
 *
 * view workout presets, create/delete/update
 *
 * name
 * list exercises in short box form
 */

export default WorkoutPresetListPage;
