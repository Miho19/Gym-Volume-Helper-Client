import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";
import WorkoutPresetListPage from "../Pages/WorkoutPresets";
import IndividualWorkoutPresetPage from "../Pages/IndividualWorkoutPreset";
import NewWorkoutPresetPage from "../Pages/NewWorkoutPreset";
import CurrentWorkoutPage from "../Pages/CurrentWorkoutPreset";

export const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "workout", element: <WorkoutPresetListPage /> },
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
