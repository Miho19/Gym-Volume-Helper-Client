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
    <section className="h-20 border border-white/5 bg-[#31363F] rounded-full flex flex-row items-center justify-between px-5">
      <div className="flex flex-row items-center gap-x-4">
        <img
          src={user?.picture}
          alt="profile picture"
          className="w-10 h-10 rounded-full border-white border object-fill"
        />
        <h2 className="font-normal group-hover:font-bold">{user?.name}</h2>
      </div>

      <button
        className="cursor-pointer h-full transition-all hover:scale-x-105 duration-300 text-[#76ABAE] hover:text-white"
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
