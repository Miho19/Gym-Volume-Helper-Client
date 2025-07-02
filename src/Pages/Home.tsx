import { Link, useNavigate } from "react-router";

function HomePage() {
  const navigator = useNavigate();

  function LogoutFunction() {
    navigator("/login");
  }

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div>
        <h2>Profile Bubble</h2>
        <Link to="/profile">Goto Profile</Link>
      </div>

      <div>
        <h2>Exercise List</h2>
        <Link to="/exercise">Goto Exercise</Link>
      </div>

      <div>
        <h2>Calendar</h2>
        <Link to="/calendar">Goto Calendar</Link>
      </div>
      <button onClick={LogoutFunction}>Log Out</button>
    </main>
  );
}

export default HomePage;
