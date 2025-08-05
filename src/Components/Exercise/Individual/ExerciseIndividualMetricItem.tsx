import type { ExerciseMetric } from "../../../Http/ResponseType/UserExerciseMetricsResponseType";

type Props = {
  metric: ExerciseMetric;
};

function ExerciseIndividualMetricItem({ metric }: Props) {
  const { dateTime, metricID, weight, reps } = metric;

  const currentDate = new Date(dateTime);

  const weightDisplayArray = weight.map((w) => `${w}kg`);

  let sets = reps.length;
  if (reps.length !== weight.length)
    sets = Math.max(reps.length, weight.length);

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
      <p>weight: {weightDisplayArray.join(", ")}</p>
      <p>reps: {reps.join(", ")}</p>
      <p>sets: {sets}</p>
    </li>
  );
}

export default ExerciseIndividualMetricItem;
