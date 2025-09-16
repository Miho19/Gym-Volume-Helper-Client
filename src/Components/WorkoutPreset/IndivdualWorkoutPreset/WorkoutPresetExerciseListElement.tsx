import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  exercise: ExerciseListElement;
};

function WorkoutPresetExerciseListElement(props: Props) {
  const { exercise } = props;

  return (
    <li className="flex flex-row border border-white/5 gap-x-5 bg-[#31363F] rounded-lg p-3 items-center">
      <img
        src={exercise.img}
        alt={`${exercise.name} image`}
        className="w-16 h-16 object-fill rounded-full"
      />
      <p className="text-wrap">{exercise.name}</p>
    </li>
  );
}

export default WorkoutPresetExerciseListElement;
