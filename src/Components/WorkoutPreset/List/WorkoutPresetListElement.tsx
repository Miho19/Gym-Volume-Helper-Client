import { Link } from "react-router";
import type { UserWorkoutPresetListElementType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetListElementType;
};

function WorkoutPresetListElement(props: Props) {
  const { workout } = props;

  return (
    <li className="border border-white/5 rounded-lg p-3 bg-[#31363F]">
      <Link
        to={`/workout/${workout.workoutID}`}
        className="flex flex-row gap-x-5 items-center"
      >
        <img
          src={workout.workoutImgURL}
          alt={`image of ${workout.workoutName} workout preset`}
          width={50}
          height={50}
        />
        <p>{workout.workoutName}</p>
      </Link>
    </li>
  );
}

export default WorkoutPresetListElement;
