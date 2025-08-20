import { useParams } from "react-router";
import IndividualWorkoutPreset from "../Components/WorkoutPreset/IndivdualWorkoutPreset/IndividualWorkoutPreset";

function IndividualWorkoutPresetPage() {
  const { id } = useParams();

  return (
    <main>
      <IndividualWorkoutPreset workoutID={id!} />
    </main>
  );
}

export default IndividualWorkoutPresetPage;
