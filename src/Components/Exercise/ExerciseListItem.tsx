import { Link } from "react-router";
import type { ExerciseListElement } from "./ExerciseTypes";

type Props = {
  item: ExerciseListElement;
};

function ExerciseListItem(props: Props) {
  const { item } = props;

  return (
    <li>
      <Link to={item.link}>
        <img src={item.img} alt={`image of ${item.name}`} />
        <p>{item.name}</p>
      </Link>
    </li>
  );
}

export default ExerciseListItem;
