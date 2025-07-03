import { Link } from "react-router";

type Props = {};

function ProfileBubble(props: Props) {
  return (
    <div>
      <h2>Profile Bubble</h2>
      <Link to="/profile" data-testid="profileLink">
        Goto Profile
      </Link>
    </div>
  );
}

export default ProfileBubble;
