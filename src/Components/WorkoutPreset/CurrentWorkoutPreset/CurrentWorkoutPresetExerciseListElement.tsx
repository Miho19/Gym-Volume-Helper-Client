import react from "react";
import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import useUserExerciseMetricsQuery from "../../../Hooks/useUserExerciseMetricsQuery";
import { sortMetricData } from "../../Exercise/Metrics/MetricSortList";

type Props = {
  exercise: ExerciseListElement;
  numberOfDisplayedMetrics: number;
};

function CurrentWorkoutPresetExerciseListElement(props: Props) {
  const { exercise } = props;

  const { data, isLoading, isError, error } = useUserExerciseMetricsQuery({
    exerciseID: exercise.id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;

  // limit the metrics

  const sortedMetricList = sortMetricData(data!.items);
  const limitedSortedMetricList = sortedMetricList.slice(
    0,
    props.numberOfDisplayedMetrics
  );

  return (
    <li style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={exercise.img} alt={`${exercise.name} image`} />
        <p>{exercise.name}</p>
      </div>
    </li>
  );
}

export default CurrentWorkoutPresetExerciseListElement;
