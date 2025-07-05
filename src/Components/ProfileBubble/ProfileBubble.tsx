import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";

type Props = {};

function ProfileBubble(_props: Props) {
  const { user } = useAuth0();

  return (
    <div>
      <img
        src={user?.picture}
        alt="profile picture"
        width={50}
        height={50}
        data-testid="profilePicture"
      />
      <h2>{user?.name}</h2>
      <Link to="/profile" data-testid="profileLink">
        Goto Profile
      </Link>
    </div>
  );
}

export default ProfileBubble;
