import { useParams } from "react-router";

/**
 *
 * /me/exercise/:id --> backend fetch the exercise + our db for exercise information
 *
 */
type Props = {};

function Exercise() {
  const params = useParams();

  return <div>ExerciseID: {params.id}</div>;
}

export default Exercise;
