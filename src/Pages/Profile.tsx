import { useAuth0 } from "@auth0/auth0-react";
import HomeButton from "../Components/Navigation/HomeButton";

function ProfilePage() {
  const { user } = useAuth0();

  return (
    <main>
      <img
        src={user?.picture}
        alt="profile picture"
        width={50}
        height={50}
        data-testid="profilePicture"
      />
      <h2>{user?.name}</h2>
      <HomeButton />
    </main>
  );
}

export default ProfilePage;
