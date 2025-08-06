import { useParams } from "react-router";
import ExerciseIndividualMetricItem from "./ExerciseIndividualMetricItem";
import ExerciseMetricsNew from "./ExerciseMetricsAddNew";
import useUserExerciseMetricsQuery from "../../../Hooks/useUserExerciseMetricsQuery";
import type { ExerciseMetric } from "../../../Http/ResponseType/UserExerciseMetricsResponseType";
import { prepareDatesForComparison } from "./MetricFormDateValidation";

type Props = {};

function ExerciseMetricsContainer(props: Props) {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useUserExerciseMetricsQuery({
    exerciseID: id!,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  const sortedMetricData = data?.items.sort((a, b) => {
    let aDateString: string = "";
    let bDateString: string = "";

    if (a.dateTime instanceof Date) {
      aDateString = a.dateTime.toDateString();
    } else {
      aDateString = a.dateTime;
    }

    if (b.dateTime instanceof Date) {
      bDateString = b.dateTime.toDateString();
    } else {
      bDateString = b.dateTime;
    }

    const [dateA, dateB] = prepareDatesForComparison([
      aDateString,
      bDateString,
    ]);
    if (dateA.getTime() >= dateB.getTime()) return -1;
    return 1;
  });

  const metricData = sortedMetricData?.map((metric: ExerciseMetric) => (
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
