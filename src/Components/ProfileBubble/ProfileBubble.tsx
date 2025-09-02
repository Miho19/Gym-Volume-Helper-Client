import { Link } from "react-router";
import type { UserBodyResponseTypePOST } from "../../Http/ResponseType/UserResponseType";

type Props = {
  user: UserBodyResponseTypePOST;
};

function ProfileBubble(props: Props) {
  const { user } = props;

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
