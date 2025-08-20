import useUserWorkoutPresetList from "../../Hooks/useUserWorkoutPresetList";
import type { WorkoutPresetType } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";
import WorkoutPreset from "./WorkoutPreset";

function WorkoutPresetList() {
  const { data, isLoading, isError, error } = useUserWorkoutPresetList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const presets = data?.items.map((preset: WorkoutPresetType) => (
    <WorkoutPreset key={preset.id} preset={preset} />
  ));

  return (
    <section>
      <ul>{presets}</ul>
    </section>
  );
}

export default WorkoutPresetList;
