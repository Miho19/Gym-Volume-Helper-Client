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
        <p>{`${weight} kg for ${reps} reps`}</p>
      </li>
    );
  });

  return (
    <li className="w-full h-full">
      {showDate && <p>{currentDate.toDateString()}</p>}
      <ol className="w-full h-full flex flex-col">{setsArray}</ol>
    </li>
  );
}

export default ExerciseIndividualMetricItem;
