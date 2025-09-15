import { Link } from "react-router";
import ProfileBubble from "../Components/ProfileBubble/ProfileBubble";
import useInitialiseUserQuery from "../Hooks/useInitialiseUserQuery";

function HomePage() {
  const { data, isLoading, isError, error } = useInitialiseUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error?.message}</div>;

  return (
    <main className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-3/4">
        <ProfileBubble user={data!} />
      </div>

      <div className="border border-white/5 rounded-full w-3/4 h-20 p-3 cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center">
        <Link to="/currentworkout/">Current Workout</Link>
      </div>

      <div className="border border-white/5 rounded-full w-3/4 h-20 p-3 cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center">
        <Link to="/workout">Workout Presets</Link>
      </div>
    </main>
  );
}

export default HomePage;
