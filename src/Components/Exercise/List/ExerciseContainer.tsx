import type { ExerciseListElement } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import ExerciseListItem from "./ExerciseListItem";

type Props = {
  currentDate: Date;
  exerciseList: ExerciseListElement[];
};

export default function ExerciseContainer(props: Props) {
  const exerciseListItems = props.exerciseList.map((exercise) => (
    <ExerciseListItem item={exercise} key={exercise.id} />
  ));

  return (
    <section>
      <h2>{props.currentDate.toDateString()}</h2>
      <ul>{exerciseListItems}</ul>
    </section>
  );
}
