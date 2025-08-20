import { Link } from "react-router";
import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  item: ExerciseListElement;
};

function ExerciseListItem(props: Props) {
  const { item } = props;

  return (
    <li style={{ listStyle: "none" }}>
      <Link
        to={`/exercise/${item.id}`}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "1%",
        }}
      >
        <img
          src={item.img}
          alt={`image of ${item.name}`}
          width={50}
          height={50}
        />
        <p>{item.name}</p>
      </Link>
    </li>
  );
}

export default ExerciseListItem;
