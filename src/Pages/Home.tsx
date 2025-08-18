import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";
import ProfileBubble from "../Components/ProfileBubble/ProfileBubble";
import useInitialiseUserQuery from "../Hooks/useInitialiseUserQuery";

function HomePage() {
  const { logout } = useAuth0();
  const { data, isLoading, isError, error } = useInitialiseUserQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error?.message}</div>;

  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <ProfileBubble user={data!} />

      <div>
        <h2>Exercise List</h2>
        <Link to="/exercise">Goto Exercise</Link>
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
