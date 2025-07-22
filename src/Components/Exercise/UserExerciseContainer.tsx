import type { UserExerciseResponseType } from "../../Http/ResponseType/UserExerciseResponseType";

type Props = {
  exercise: UserExerciseResponseType;
};

function UserExerciseContainer(props: Props) {
  const { exercise } = props;
  const { exerciseDetails, exerciseID, userExerciseDetails } = exercise;

  return (
    <main>
      <h2>id: {exerciseID}</h2>
      <h2>name: {exerciseDetails.name}</h2>
      <img
        src={exerciseDetails.imgURL}
        alt={`img of ${exerciseDetails.name}`}
      />
      <p>description: {exerciseDetails.overview}</p>
    </main>
  );
}

export default UserExerciseContainer;
