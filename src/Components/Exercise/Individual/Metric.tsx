import type { UserExerciseTrend } from "../../../Http/ResponseType/UserExerciseResponseType";

type Props = {
  item: UserExerciseTrend;
};

function ExerciseListItem(props: Props) {
  const { item } = props;

  return <li style={{ listStyle: "none" }}></li>;
}

export default ExerciseListItem;
