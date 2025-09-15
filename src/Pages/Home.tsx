import { Link } from "react-router";
import ProfileBubble from "../Components/ProfileBubble/ProfileBubble";
import useInitialiseUserQuery from "../Hooks/useInitialiseUserQuery";

function HomePage() {
  const { data, isLoading, isError, error } = useInitialiseUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error?.message}</div>;

  return (
    <main className="w-full h-full flex flex-col gap-y-4 items-center">
      <div className="w-3/4">
        <ProfileBubble user={data!} />
      </div>

      <div>
        <h2>Current Workout</h2>
        <Link to="/currentworkout/">Goto Current Workout</Link>
      </div>

      <div>
        <h2>Workout Presets</h2>
        <Link to="/workout">Goto Workout Presets</Link>
      </div>
    </main>
  );
}

export default HomePage;
