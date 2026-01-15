import { userWorkoutListHandlers } from "./User/UserWorkoutList";
import { individualWorkoutHandlers } from "./Individual/Workout";

export const workoutHandlers = [
  ...userWorkoutListHandlers,
  ...individualWorkoutHandlers,
];
