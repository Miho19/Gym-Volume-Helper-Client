import type { Exercise } from "../../Zod/ExerciseSchema";
import { userWorkoutList } from "../Workout/WorkoutExamples";

const exercise1: Exercise = {
  exerciseId: "exr_41n2hxnFMotsXTj3",
  name: "Bench Press",
  imageUrl: "https://cdn.exercisedb.dev/media/w/images/A8OLBqBa26.jpg",
};

const exercise2: Exercise = {
  exerciseId: "exr_41n2hGNrmUnF58Yy",
  name: "Reverse Lunge",
  imageUrl: "https://cdn.exercisedb.dev/media/w/images/XUs62RE49n.jpg",
};

const exercise3: Exercise = {
  exerciseId: "exr_41n2hpeHAizgtrEw",
  name: "One arm Revers Wrist Curl",
  imageUrl: "https://cdn.exercisedb.dev/media/w/images/FWJCrJYceH.jpg",
};

const exercise4: Exercise = {
  exerciseId: "exr_41n2hU3XPwUFSpkC",
  name: "L-Sit on Floor",
  imageUrl: "https://cdn.exercisedb.dev/media/w/images/KZPZTyNqWB.jpg",
};

const exercise5: Exercise = {
  exerciseId: "exr_41n2hXszY7TgwKy4",
  name: "Chin-Up",
  imageUrl: "https://cdn.exercisedb.dev/media/w/images/S7KbaJxkei.jpg",
};

export const workoutExerciseLookupTable = new Map<string, Exercise[]>();

const workout1Id = userWorkoutList[0].id;
workoutExerciseLookupTable.set(workout1Id, [exercise1, exercise2, exercise3]);

const workout2Id = userWorkoutList[1].id;
workoutExerciseLookupTable.set(workout2Id, [exercise4, exercise5]);
