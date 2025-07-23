import type { UserExerciseMetrics } from "../../../Http/ResponseType/UserExerciseResponseType";

type Props = {
  exerciseID: string;
  metrics: UserExerciseMetrics;
};

function ExerciseMetricsContainer(props: Props) {
  const { metrics } = props;
  const { reps, weight, sets } = metrics;

  return (
    <section>
      <h2>Metrics</h2>
      <ul></ul>
    </section>
  );
}

export default ExerciseMetricsContainer;
