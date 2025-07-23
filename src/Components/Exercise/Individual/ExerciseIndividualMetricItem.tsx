import type { UserExerciseMetrics } from "../../../Http/ResponseType/UserExerciseResponseType";

type Props = {
  item: UserExerciseMetrics;
};

function ExerciseIndividualMetricItem(props: Props) {
  const { item } = props;

  const { dateTime } = item;

  const currentDate = new Date(dateTime);

  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
      <p>{currentDate.toDateString()}</p>
      <p>weight: {item.value.weight.join(",")}</p>
      <p>reps: {item.value.reps.join(",")}</p>
      <p>sets: {item.value.reps.length}</p>
    </li>
  );
}

export default ExerciseIndividualMetricItem;
