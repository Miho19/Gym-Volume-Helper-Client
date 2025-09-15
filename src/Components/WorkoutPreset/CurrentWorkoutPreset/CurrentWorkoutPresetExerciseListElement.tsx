import react from "react";
import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import useUserExerciseMetricsQuery from "../../../Hooks/useUserExerciseMetricsQuery";
import { sortMetricData } from "../../Exercise/Metrics/MetricSortList";
import type { ExerciseMetric } from "../../../Http/ResponseType/UserExerciseMetricsResponseType";
import ExerciseIndividualMetricItem from "../../Exercise/Metrics/ExerciseIndividualMetricItem";
import ExerciseMetricsNew from "../../Exercise/Metrics/ExerciseMetricsAddNew";

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

  const metricList = limitedSortedMetricList.map((metric: ExerciseMetric) => (
    <ExerciseIndividualMetricItem showDate={true} metric={metric} />
  ));

  return (
    <li style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src={exercise.img}
          alt={`${exercise.name} image`}
          style={{ width: "50px", height: "50px" }}
        />
        <p>{exercise.name}</p>
      </div>
      <ol style={{ display: "flex", flexDirection: "column" }}>{metricList}</ol>
      <ExerciseMetricsNew exerciseID={exercise.id} />
    </li>
  );
}

export default CurrentWorkoutPresetExerciseListElement;
