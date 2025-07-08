import ExerciseContainer from "../Components/Exercise/ExerciseContainer";
import type { ExerciseListElement } from "../Components/Exercise/ExerciseTypes";
import HomeButton from "../Components/Navigation/HomeButton";

function ExercisePage() {
  const exerciseList: ExerciseListElement[] = [
    {
      name: "Incline Hammer Curls",
      img: "https://static.strengthlevel.com/images/exercises/incline-hammer-curl/incline-hammer-curl-800.jpg",
      link: "/exercise/1",
      id: "12345",
    },
  ];

  return (
    <main>
      <h1>Exericses</h1>
      <ExerciseContainer currentDate={new Date()} exerciseList={exerciseList} />
      <HomeButton />
    </main>
  );
}

export default ExercisePage;
