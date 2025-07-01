import { useNavigate } from "react-router";

function LoginPage() {
  const navigator = useNavigate();

  return (
    <main>
      <h1>Gym Helper</h1>
      <p>Explain what app does</p>

      <button
        onClick={() => {
          navigator("/");
        }}
      >
        Log in With Facebook
      </button>
    </main>
  );
}

export default LoginPage;
