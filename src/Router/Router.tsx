import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";
import ProfilePage from "../Pages/Profile";
import ExercisePage from "../Pages/ExerciseList";
import IndividualExercise from "../Pages/IndividualExercise";

export const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "profile", element: <ProfilePage /> },
      { path: "exercise", element: <ExercisePage /> },
      { path: "exercise/:id", element: <IndividualExercise /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routerConfig);
