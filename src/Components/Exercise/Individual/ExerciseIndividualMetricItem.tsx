import type {
  ExerciseMetric,
  ExerciseSetType,
} from "../../../Http/ResponseType/UserExerciseMetricsResponseType";

type Props = {
  metric: ExerciseMetric;
};

function ExerciseIndividualMetricItem({ metric }: Props) {
  const { dateTime, sets } = metric;

  const currentDate = new Date(dateTime);

  const setsArray = sets.map((set: ExerciseSetType) => {
    const { weight, reps } = set;
    return `[${weight} kg ${reps}]`;
  });

  const setsDisplay = setsArray.join(",");

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
      {setsDisplay}
    </li>
  );
}

export default ExerciseIndividualMetricItem;
