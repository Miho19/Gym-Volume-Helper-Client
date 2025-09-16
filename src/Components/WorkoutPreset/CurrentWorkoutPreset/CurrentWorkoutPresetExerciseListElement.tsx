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

  const sortedPreviousMetricList = sortMetricData(data!.items);
  const limitedSortedPreviousMetricList = sortedPreviousMetricList.slice(
    0,
    props.numberOfDisplayedMetrics
  );

  const previousMetricListToDisplay = limitedSortedPreviousMetricList.map(
    (metric: ExerciseMetric) => (
      <ExerciseIndividualMetricItem metric={metric} showDate={false} />
    )
  );

  const previousSetsRecordDate = new Date(
    limitedSortedPreviousMetricList[0].dateTime
  ).toDateString();

  return (
    <li className="w-full h-full flex flex-col border border-white/5 list-none gap-y-5 bg-[#31363F] rounded-lg p-3">
      <div className="flex flex-row items-center gap-x-5">
        <img
          src={exercise.img}
          alt={`${exercise.name} image`}
          className="w-16 h-16 border border-white/5 rounded-full"
        />
        <p>{exercise.name}</p>
      </div>
      <hr className="w-full self-center"></hr>
      <ExerciseMetricsNew exerciseID={exercise.id} />
      <div className="w-full h-full border border-white/5 rounded-lg bg-[#31363F]">
        <p>Current Sets</p>
      </div>
      <div className="w-full h-full border border-white/5 rounded-lg bg-[#31363F]">
        <p>Previous Sets Recorded {previousSetsRecordDate}</p>
        <ol className="w-full h-full">{previousMetricListToDisplay}</ol>
      </div>
    </li>
  );
}

export default CurrentWorkoutPresetExerciseListElement;
