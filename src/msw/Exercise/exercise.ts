import type { ExerciseMetric } from "../../Http/Response/UserExerciseMetricsResponseType";
import type { ExerciseListElement } from "../../Http/Response/UserWorkoutPresetsResponseType";
import { exerciseDetailsHandlers } from "./exerciseDetailsHandlers";
import { exerciseMetricsHandlers } from "./exerciseMetricsHandlers";

export const exerciseHandlers = [
  ...exerciseDetailsHandlers,
  ...exerciseMetricsHandlers,
];

export const TestMinExerciseListElementList: ExerciseListElement[] = [
  {
    id: "VPPtusI",
    name: "inverted row bent knees",
    img: "https://static.exercisedb.dev/media/VPPtusI.gif",
    pageLink: "VPPtusI",
  },
  {
    id: "8d8qJQI",
    name: "barbell reverse grip incline bench row",
    img: "https://static.exercisedb.dev/media/8d8qJQI.gif",
    pageLink: "8d8qJQI",
  },
  {
    id: "JGKowMS",
    name: "smith narrow row",
    img: "https://static.exercisedb.dev/media/JGKowMS.gif",
    pageLink: "JGKowMS",
  },
];

export let currentMetricID = 3;

export const testUserMetric: ExerciseMetric = {
  exerciseID: "VPPtusI",
  metricID: String(currentMetricID),
  dateTime: new Date(),
  sets: [
    { reps: 12, weight: 8 },
    { reps: 8, weight: 8 },
    { reps: 5, weight: 9 },
  ],
};

export const UserExerciseMetrics: ExerciseMetric[] = [
  testUserMetric,
  {
    exerciseID: "8d8qJQI",
    metricID: "2",
    dateTime: new Date(),
    sets: [
      { reps: 8, weight: 10 },
      { reps: 8, weight: 10 },
      { reps: 5, weight: 12 },
    ],
  },
  {
    exerciseID: "JGKowMS",
    metricID: "3",
    dateTime: new Date(),
    sets: [
      { reps: 6, weight: 16 },
      { reps: 6, weight: 16 },
      { reps: 5, weight: 16 },
    ],
  },
];

export function addNewMetric(newMetric: ExerciseMetric) {
  newMetric.metricID = String(++currentMetricID);
  UserExerciseMetrics.push(newMetric);
}
