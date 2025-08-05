import { exerciseListHandlers } from "./exerciseListHandlers";
import { exerciseDetailsHandlers } from "./exerciseDetailsHandlers";

export const exerciseHandlers = [
  ...exerciseListHandlers,
  ...exerciseDetailsHandlers,
];

let currentID = 0;

const testExerciseUserMetrics: UserExerciseMetrics[] = [];
initialExerciseMetric();

function getExercise() {
  return HttpResponse.json({
    exerciseID: "K6NnTv0",

    exerciseDetails: testExerciseDetails,

    userExerciseMetrics: testExerciseUserMetrics,
  });
}

function testExerciseUserMetricAdd(input: UserExerciseMetrics) {
  testExerciseUserMetrics.push(input);
}

function initialExerciseMetric() {
  testExerciseUserMetricAdd({
    exerciseID: "K6NnTv0",
    metricID: String(++currentID),
    dateTime: new Date(),
    value: { weight: [8, 8, 8], reps: [12, 8, 10] },
  });
}

/**
 *
 *
 * POST --> exerciseID, metric {weight, reps, dateTime}
 * server
 *  -> if exerciseID, find dateTime -> add weight, reps
 *  -> should have a metric id --> associate metric id with user id?
 *
 */
