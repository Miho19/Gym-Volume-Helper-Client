import type { UserExerciseMetrics } from "../../../Http/ResponseType/UserExerciseResponseType";
import ExerciseIndividualMetricItem from "./ExerciseIndividualMetricItem";
import ExerciseMetricsNew from "./ExerciseMetricsAddNew";

type Props = {
  exerciseID: string;
  metrics: UserExerciseMetrics[];
};

function ExerciseMetricsContainer(props: Props) {
  const { exerciseID, metrics } = props;

  const metricData = metrics.map((metric) => (
    <ExerciseIndividualMetricItem metric={metric} key={metric.metricID} />
  ));

  return (
    <section>
      <h2>Metrics</h2>
      <ExerciseMetricsNew exerciseID={exerciseID} />
      <ul>{metricData}</ul>
    </section>
  );
}

export default ExerciseMetricsContainer;
