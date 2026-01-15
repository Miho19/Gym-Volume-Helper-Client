import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";
import WorkoutListPage from "../Pages/WorkoutList";
import IndividualWorkoutPresetPage from "../Pages/IndividualWorkout";
import NewWorkoutPresetPage from "../Pages/NewWorkout";
import CurrentWorkoutPage from "../Pages/CurrentWorkout";

export const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "workout", element: <WorkoutListPage /> },
      { path: "workout/:id", element: <IndividualWorkoutPresetPage /> },
      { path: "newworkout", element: <NewWorkoutPresetPage /> },
      { path: "currentworkout", element: <CurrentWorkoutPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routerConfig);
