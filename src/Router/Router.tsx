import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";
import ProfilePage from "../Pages/Profile";
import WorkoutPresetListPage from "../Pages/WorkoutPresets";
import IndividualWorkoutPresetPage from "../Pages/IndividualWorkoutPreset";
import NewWorkoutPresetPage from "../Pages/NewWorkoutPreset";

export const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "profile", element: <ProfilePage /> },
      { path: "workout", element: <WorkoutPresetListPage /> },
      { path: "workout/:id", element: <IndividualWorkoutPresetPage /> },
      { path: "newworkout", element: <NewWorkoutPresetPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routerConfig);
