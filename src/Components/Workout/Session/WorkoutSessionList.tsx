import type { WorkoutSession } from "../../../Zod/WorkoutSessionSchema";

type Props = {
  metric: WorkoutSession;
};

function ExerciseIndividualMetricItem({ metric }: Props) {
  const { dateTime, sets } = metric;

  // const setsArray = sets.map((set: ExerciseSetType, index: number) => {
  //   const { weight, reps } = set;
  //   return (
  //     <li key={index}>
  //       <p>{`${weight} kg for ${reps} reps`}</p>
  //     </li>
  //   );
  // });

  const setsArray: [] = [];

  return (
    <li className="w-full h-full">
      <ol className="w-full h-full flex flex-col">{setsArray}</ol>
    </li>
  );
}

export default ExerciseIndividualMetricItem;
