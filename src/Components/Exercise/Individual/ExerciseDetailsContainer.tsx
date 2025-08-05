import { useParams } from "react-router";
import useExerciseDetailsQuery from "../../../Hooks/useExerciseDetailsQuery";

type Props = {};

function ExerciseDetailsContainer(_props: Props) {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useExerciseDetailsQuery({
    exerciseID: id!,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <section>
      <h2>id: {id}</h2>
      <h2>name: {data?.name}</h2>
      <img src={data?.imgURL} alt={`img of ${data?.name}`} />
      <p>{data?.overview}</p>
    </section>
  );
}

export default ExerciseDetailsContainer;
