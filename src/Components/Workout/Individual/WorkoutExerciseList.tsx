import useWorkoutExerciseList from "../../../Hooks/Exercise/useWorkoutExerciseList";
import type { Workout } from "../../../Zod/WorkoutSchema";

type Props = {
  workout: Workout;
};

function WorkoutExerciseList(props: Props) {
  const { id: workoutId } = props.workout;
  const { data, isSuccess, isError, isLoading, error } =
    useWorkoutExerciseList(workoutId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !isSuccess) return <div>Error: {error?.message}</div>;

  const currentWorkoutPresetExerciseListElements = data.map((e) => (
    <CurrentWorkoutExerciseListElement
      key={e.exerciseId}
      exercise={e}
      numberOfDisplayedMetrics={3}
    />
  ));

  const exerciseList: string[] = ["hello"];

  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col gap-y-10 list-none">
        {exerciseList}
      </ul>
    </section>
  );
}

export default WorkoutExerciseList;

// import type { ExerciseListElement } from "../../../Http/Response/UserWorkoutPresetsResponseType";
// import useUserExerciseMetricsQuery from "../../../Hooks/useUserExerciseMetricsQuery";
// import { sortMetricData } from "../../Exercise/Metrics/MetricSortList";
// import type { ExerciseMetric } from "../../../Http/Response/UserExerciseMetricsResponseType";
// import ExerciseIndividualMetricItem from "../../Exercise/Metrics/ExerciseIndividualMetricItem";

// const { data, isLoading, isError, error } = useUserExerciseMetricsQuery({
//   exerciseID: exercise.id,
// });

// if (isLoading) return <div>Loading...</div>;
// if (isError) return <div>error: {error.message}</div>;

// const sortedPreviousMetricList = sortMetricData(data!.items);
// const limitedSortedPreviousMetricList = sortedPreviousMetricList.slice(
//   0,
//   props.numberOfDisplayedMetrics
// );

// const previousMetricListToDisplay = limitedSortedPreviousMetricList.map(
//   (metric: ExerciseMetric) => (
//     <ExerciseIndividualMetricItem metric={metric} showDate={false} />
//   )
// );

// const previousSetsRecordDate = new Date(
//   limitedSortedPreviousMetricList[0].dateTime
// ).toDateString();

{
  /* <div className="w-full h-full border border-white/5 rounded-lg bg-[#31363F] p-5 flex flex-col gap-y-5">
        <p>{previousSetsRecordDate}</p>
        <hr className="text-white/50" />
        <ol className="w-full h-full">{previousMetricListToDisplay}</ol>
      </div> */
}

{
  /* <div className="flex flex-col gap-y-5 border border-white/5 rounded-lg bg-[#31363F] p-5">
        <p>Current Sets</p>
        <hr className="text-white/50" />
        <ExerciseMetricsNew exerciseID={exercise.exerciseId} />
      </div> */
}
