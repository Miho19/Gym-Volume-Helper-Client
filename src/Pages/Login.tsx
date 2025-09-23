import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-y-5 p-5 min-h-screen">
      <h1 className="text-8xl tracking-tighter font-semibold mb-5">
        Gym Helper
      </h1>
      <p className="text-2xl">
        Create workout plans to track progressive overload
      </p>

      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className="border border-white/5 rounded-2xl py-5 px-10 bg-blue-500 font-semibold cursor-pointer hover:bg-blue-600 transition-all duration-300"
      >
        Log in With Facebook
      </button>
    </main>
  );
}

export default LoginPage;
