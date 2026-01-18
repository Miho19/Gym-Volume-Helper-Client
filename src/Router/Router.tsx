import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/Error";
import LoginPage from "../Pages/Login";
import HomePage from "../Pages/Home";
import WorkoutListPage from "../Pages/WorkoutList";
import CurrentWorkoutPage from "../Pages/CurrentWorkout";
import NewWorkoutPage from "../Pages/NewWorkout";
import IndividualWorkoutPage from "../Pages/IndividualWorkout";

export const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "workout", element: <WorkoutListPage /> },
      { path: "workout/:id", element: <IndividualWorkoutPage /> },
      { path: "newworkout", element: <NewWorkoutPage /> },
      { path: "currentworkout", element: <CurrentWorkoutPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routerConfig);
