import type { WorkoutPresetType } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

const testExerciseList: WorkoutPresetType[] = [
  {
    id: "1",
    ownerID: "12345",
    name: "Preset 1",
    exerciseIDList: ["K6NnTv0", "U0uPZBq", "QD32SbB"],
    imgURL: "https://picsum.photos/id/237/200/300",
  },
];

function WorkoutPresetList() {
  const data = testExerciseList;

  return <section></section>;
}

export default WorkoutPresetList;
