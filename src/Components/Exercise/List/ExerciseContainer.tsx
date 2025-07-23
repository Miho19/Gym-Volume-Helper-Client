import ExerciseListItem from "./ExerciseListItem";
import type { ExerciseListElement } from "../ExerciseTypes";

type Props = {
  currentDate: Date;
  exerciseList: ExerciseListElement[];
};

function ExerciseContainer(props: Props) {
  const exerciseListItems = props.exerciseList.map((exercise) => (
    <ExerciseListItem item={exercise} key={exercise.id} />
  ));

  return (
    <main>
      <h2>{props.currentDate.toDateString()}</h2>
      <ul>{exerciseListItems}</ul>
    </main>
  );
}

export default ExerciseContainer;
