import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  const navigator = useNavigate();

  return (
    <main>
      <h1>Gym Helper</h1>
      <p>Explain what app does</p>

      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log in With Facebook
      </button>
    </main>
  );
}

export default LoginPage;
