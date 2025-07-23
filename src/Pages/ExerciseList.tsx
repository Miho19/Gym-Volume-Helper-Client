import ExerciseContainer from "../Components/Exercise/List/ExerciseContainer";
import HomeButton from "../Components/Navigation/HomeButton";
import useExerciseListQuery from "../Hooks/useExerciseListQuery";

function ExerciseListPage() {
  const { data, isLoading, isError, error } = useExerciseListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error {error.message}</div>;

  return (
    <main>
      <h1>Exericses</h1>
      <ExerciseContainer currentDate={new Date()} exerciseList={data?.items!} />
      <HomeButton />
    </main>
  );
}

export default ExerciseListPage;
