import type { UserExerciseResponseExerciseDetailsType } from "../../../Http/ResponseType/UserExerciseResponseType";

type Props = {
  exerciseID: string;
  exercise: UserExerciseResponseExerciseDetailsType;
};

function ExerciseDetailsContainer(props: Props) {
  const { exerciseID, exercise: details } = props;

  return (
    <section>
      <h2>id: {exerciseID}</h2>
      <h2>name: {details.name}</h2>
      <img src={details.imgURL} alt={`img of ${details.name}`} />
      <p>{details.overview}</p>
    </section>
  );
}

export default ExerciseDetailsContainer;
