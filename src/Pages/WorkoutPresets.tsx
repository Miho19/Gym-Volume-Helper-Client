import { useNavigate } from "react-router";
import HomeButton from "../Components/Navigation/HomeButton";
import WorkoutPresetList from "../Components/WorkoutPreset/List/WorkoutPresetList";

function WorkoutPresetListPage() {
  const navigator = useNavigate();
  return (
    <main className="mx-auto flex flex-col p-5 min-h-screen justify-between gap-y-5">
      <button
        onClick={() => navigator("/newworkout")}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 bg-[#31363F] flex flex-col justify-center items-center"
      >
        Create Workout Preset
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
