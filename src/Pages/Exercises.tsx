import ExerciseContainer from "../Components/Exercise/ExerciseContainer";
import HomeButton from "../Components/Navigation/HomeButton";

function ExercisePage() {
  return (
    <main>
      <h1>Exericses</h1>
      <ExerciseContainer currentDate={new Date()} exerciseList={exerciseList} />
      <HomeButton />
    </main>
  );
}

export default ExercisePage;
