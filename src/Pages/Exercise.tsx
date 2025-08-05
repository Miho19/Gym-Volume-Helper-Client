import ExerciseDetailsContainer from "../Components/Exercise/Individual/ExerciseDetailsContainer";
import ExerciseMetricsContainer from "../Components/Exercise/Individual/ExerciseMetricsContainer";

/**
 *
 * /me/exercise/:id --> backend fetch the exercise + our db for exercise information
 *
 */
type Props = {};

function Exercise() {
  return (
    <main>
      <ExerciseDetailsContainer />
      <ExerciseMetricsContainer />
    </main>
  );
}

export default Exercise;
