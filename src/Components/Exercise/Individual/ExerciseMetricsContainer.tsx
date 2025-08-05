import { useParams } from "react-router";
import ExerciseIndividualMetricItem from "./ExerciseIndividualMetricItem";
import ExerciseMetricsNew from "./ExerciseMetricsAddNew";
import useUserExerciseMetricsQuery from "../../../Hooks/useUserExerciseMetricsQuery";
import type { ExerciseMetric } from "../../../Http/ResponseType/UserExerciseMetricsResponseType";

type Props = {};

function ExerciseMetricsContainer(props: Props) {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useUserExerciseMetricsQuery({
    exerciseID: id!,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  const metricData = data?.items.map((metric: ExerciseMetric) => (
    <ExerciseIndividualMetricItem metric={metric} key={metric.metricID} />
  ));

  return (
    <section>
      <h2>Metrics</h2>
      <ExerciseMetricsNew exerciseID={id!} />
      <ul>{metricData}</ul>
    </section>
  );
}

export default ExerciseMetricsContainer;
