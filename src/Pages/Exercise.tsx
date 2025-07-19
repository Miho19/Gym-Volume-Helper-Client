import { useParams } from "react-router";

type Props = {};

function Exercise() {
  const params = useParams();

  return <div>ExerciseID: {params.id}</div>;
}

export default Exercise;
