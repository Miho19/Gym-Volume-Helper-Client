import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  exercise: ExerciseListElement;
};

function WorkoutPresetExerciseListElement(props: Props) {
  const { exercise } = props;

  return (
    <li style={{ listStyle: "none", display: "flex", flexDirection: "row" }}>
      <p>{exercise.name}</p>
      <img src={exercise.img} alt={`${exercise.name} image`} />
    </li>
  );
}

export default WorkoutPresetExerciseListElement;
