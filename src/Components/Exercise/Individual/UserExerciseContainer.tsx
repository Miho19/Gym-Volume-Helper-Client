import type { UserExerciseResponseType } from "../../../Http/ResponseType/UserExerciseResponseType";
import ExerciseDetailsContainer from "./ExerciseDetailsContainer";
import ExerciseMetricsContainer from "./ExerciseMetricsContainer";

type Props = {
  exercise: UserExerciseResponseType;
};

function UserExerciseContainer(props: Props) {
  const { exercise } = props;
  const { exerciseDetails, exerciseID, userExerciseMetrics } = exercise;

  return (
    <main>
      <ExerciseDetailsContainer
        exerciseID={exerciseID}
        exercise={exerciseDetails}
      />
      <ExerciseMetricsContainer
        exerciseID={exerciseID}
        metrics={userExerciseMetrics}
      />
    </main>
  );
}

export default UserExerciseContainer;
