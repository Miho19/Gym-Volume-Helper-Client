import { useNavigate } from "react-router";

function HomePage() {
  const navigator = useNavigate();

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div onClick={() => navigator("/profile")}>Profile Bubble</div>
      <div onClick={() => navigator("/exercise")}>
        List of Exercises; short list
      </div>
      <div onClick={() => navigator("/calendar")}>Calendar</div>
      <button
        onClick={() => {
          navigator("login");
        }}
      >
        Sign Out
      </button>
    </main>
  );
}

export default HomePage;
