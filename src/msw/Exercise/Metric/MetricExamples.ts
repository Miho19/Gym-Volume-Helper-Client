import type {
  ExerciseMetric,
  ExerciseMetricSet,
} from "../../../Zod/WorkoutSessionSchema";
import { userWorkoutList } from "../../Workout/WorkoutExamples";
import { workoutExerciseLookupTable } from "../ExerciseExamples";

const workout1Id = userWorkoutList[0].id;
const workout1ExerciseList = workoutExerciseLookupTable.get(workout1Id);

const exercise1Id = workout1ExerciseList![0].exerciseId;

// first session

const metric1: ExerciseMetric = {
  sessionId: "1",
  exerciseId: exercise1Id,
  workoutId: workout1Id,
  dateTime: new Date(2025, 1, 20),
  sets: [
    { weight: 50, repetitions: 12 },
    { weight: 55, repetitions: 8 },
    { weight: 55, repetitions: 8 },
  ],
};

// next session
const metric2: ExerciseMetric = {
  sessionId: "2",
  exerciseId: exercise1Id,
  workoutId: workout1Id,
  dateTime: new Date(2025, 1, 24),
  sets: [
    { weight: 55, repetitions: 12 },
    { weight: 55, repetitions: 10 },
    { weight: 55, repetitions: 8 },
  ],
};

// the key is just going to be the exercise id
const exerciseWorkoutMetricLookupTable = new Map<string, ExerciseMetric[]>();

function exerciseWorkoutMetricAddNewSession(exerciseMetric: ExerciseMetric) {}

exerciseWorkoutMetricLookupTable.set(metric1.exerciseId, [metric1]);
exerciseWorkoutMetricLookupTable.set(metric1.exerciseId, [metric2]);
