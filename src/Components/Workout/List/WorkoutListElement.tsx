import { Link } from "react-router";
import type { Workout } from "../../../Zod/WorkoutSchema";

type Props = {
  workout: Workout;
};

function WorkoutListElement(props: Props) {
  const { workout } = props;

  return (
    <li className="border border-white/5 rounded-lg p-3 bg-[#31363F]">
      <Link
        to={`/workout/${workout.id}`}
        className="flex flex-row gap-x-5 items-center"
      >
        <img
          src={workout.pictureSource}
          alt={`image of ${workout.name} workout preset`}
          width={50}
          height={50}
        />
        <p>{workout.name}</p>
      </Link>
    </li>
  );
}

export default WorkoutListElement;
