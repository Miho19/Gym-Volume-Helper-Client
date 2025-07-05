import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";
import ProfileBubble from "../Components/ProfileBubble/ProfileBubble";

function HomePage() {
  const { logout } = useAuth0();

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
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        data-testid="homeLogoutButton"
      >
        Log Out
      </button>
    </main>
  );
}

export default HomePage;
