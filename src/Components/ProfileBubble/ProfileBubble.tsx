import { Link } from "react-router";
import type { UserBodyResponseTypePOST } from "../../Http/ResponseType/UserResponseType";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  user: UserBodyResponseTypePOST;
};

function ProfileBubble(props: Props) {
  const { logout } = useAuth0();
  const { user } = props;

  return (
    <section className="w-full h-20 border border-white/5 bg-[#31363F] rounded-full flex flex-row items-center mt-5 justify-between">
      <Link
        to="/profile"
        className="h-full flex flex-row gap-x-5 ml-5 items-center transition-all hover:scale-105 duration-300 group "
      >
        <img
          src={user?.picture}
          alt="profile picture"
          className="w-10 h-10 rounded-full border-white border"
        />
        <h2 className="font-normal group-hover:font-bold">{user?.name}</h2>
      </Link>

      <button
        className="cursor-pointer w-20 h-full mr-5 transition-all hover:scale-105 duration-300 text-[#76ABAE] hover:font-bold"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        data-testid="homeLogoutButton"
      >
        Log Out
      </button>
    </section>
  );
}

export default ProfileBubble;
