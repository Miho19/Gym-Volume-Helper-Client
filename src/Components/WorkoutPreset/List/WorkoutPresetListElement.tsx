import { Link } from "react-router";
import type { UserWorkoutPresetListElementType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetListElementType;
};

function WorkoutPresetListElement(props: Props) {
  const { workout } = props;

  return (
    <li style={{ listStyle: "none" }}>
      <Link
        to={`/workout/${workout.workoutID}`}
        style={{ textDecoration: "none" }}
      >
        <p>{workout.workoutName}</p>
        <img
          src={workout.workoutImgURL}
          alt={`image of ${workout.workoutName} workout preset`}
          width={50}
          height={50}
        />
      </Link>
    </li>
  );
}

export default WorkoutPresetListElement;
