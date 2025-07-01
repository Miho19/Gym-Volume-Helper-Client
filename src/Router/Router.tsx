import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ element: <HomePage />, index: true }],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
