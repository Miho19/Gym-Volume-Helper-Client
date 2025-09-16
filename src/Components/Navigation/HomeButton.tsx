import { useNavigate } from "react-router";

function HomeButton() {
  const navigation = useNavigate();
  return (
    <button
      onClick={() => navigation("/")}
      className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center m-5"
    >
      Home
    </button>
  );
}

export default HomeButton;
