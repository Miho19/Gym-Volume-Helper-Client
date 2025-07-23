import type { UserExerciseResponseType } from "../../../Http/ResponseType/UserExerciseResponseType";
import ExerciseDetailsContainer from "./ExerciseDetailsContainer";

type Props = {
  exercise: UserExerciseResponseType;
};

function UserExerciseContainer(props: Props) {
  const { exercise } = props;
  const { exerciseDetails, exerciseID, userExerciseDetails } = exercise;

  return (
    <main>
      <ExerciseDetailsContainer
        exerciseID={exerciseID}
        exercise={exerciseDetails}
      />
    </main>
  );
}

export default UserExerciseContainer;
