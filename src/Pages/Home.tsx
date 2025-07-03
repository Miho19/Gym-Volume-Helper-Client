import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import ProfileBubble from "../Components/ProfileBubble/ProfileBubble";

function HomePage() {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  const navigator = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigator("login");
      }
    }
  }, [isAuthenticated, isLoading]);

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <ProfileBubble />

      <div>
        <h2>Exercise List</h2>
        <Link to="/exercise" data-testid="exerciseLink">
          Goto Exercise
        </Link>
      </div>

      <div>
        <h2>Calendar</h2>
        <Link to="/calendar" data-testid="calendarLink">
          Goto Calendar
        </Link>
      </div>
      <button onClick={() => logout()} data-testid="homeLogoutButton">
        Log Out
      </button>
    </main>
  );
}

export default HomePage;
