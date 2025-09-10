import type {
  ExerciseMetric,
  ExerciseSetType,
} from "../../../Http/ResponseType/UserExerciseMetricsResponseType";

type Props = {
  metric: ExerciseMetric;
  showDate: boolean;
};

function ExerciseIndividualMetricItem({ metric, showDate }: Props) {
  const { dateTime, sets } = metric;

  const currentDate = new Date(dateTime);

  const setsArray = sets.map((set: ExerciseSetType, index: number) => {
    const { weight, reps } = set;
    return (
      <li key={index}>
        <p>{`${weight} kg ${reps}`}</p>
      </li>
    );
  });

  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}
    >
      {showDate && <p>{currentDate.toDateString()}</p>}
      <ul>{setsArray}</ul>
    </li>
  );
}

export default ExerciseIndividualMetricItem;
