import { useNavigate } from "react-router";
import NewWorkoutForm from "../Components/Workout/New/NewWorkoutForm";

function NewWorkoutPage() {
  const navigation = useNavigate();

  return (
    <main className="mx-auto flex flex-col items-center gap-y-5 p-5 min-h-screen">
      <button
        onClick={() => navigation("/workout")}
        className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
      >
        Back
      </button>

      <NewWorkoutForm />
    </main>
  );
}

export default NewWorkoutPage;
