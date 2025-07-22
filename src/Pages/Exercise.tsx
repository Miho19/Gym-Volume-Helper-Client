import { useParams } from "react-router";
import useUserExerciseQuery from "../Hooks/useUserExerciseQuery";
import UserExerciseContainer from "../Components/Exercise/UserExerciseContainer";

/**
 *
 * /me/exercise/:id --> backend fetch the exercise + our db for exercise information
 *
 */
type Props = {};

function Exercise() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useUserExerciseQuery({
    exerciseID: id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return <UserExerciseContainer exercise={data!} />;
}

export default Exercise;
