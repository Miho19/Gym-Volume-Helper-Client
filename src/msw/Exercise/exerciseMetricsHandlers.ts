import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  ExerciseMetric,
  UserExerciseMetricsResponseType,
} from "../../Http/ResponseType/UserExerciseMetricsResponseType";

/**
 *
 * Doing this because server is like 1 week away
 *
 */

type GetMetricsParams = {
  exerciseID: string;
};

export const exerciseMetricsHandlers = [
  http.get<GetMetricsParams, undefined, UserExerciseMetricsResponseType>(
    toURL("/me/exercise/:exerciseID"),
    ({ params }) => {
      const { exerciseID } = params;

      const filterList = UserExerciseMetrics.filter(
        (metric) => metric.exerciseID === exerciseID
      );

      const bodyResponse: UserExerciseMetricsResponseType = {
        exerciseID: exerciseID,
        items: filterList,
      };

      return HttpResponse.json(bodyResponse);
    }
  ),
];

const testUserMetric: ExerciseMetric = {
  exerciseID: "K6NnTv0",
  metricID: "1",
  dateTime: new Date(),
  weight: [8, 8, 8],
  reps: [12, 8, 10],
};

const UserExerciseMetrics: ExerciseMetric[] = [testUserMetric];

/**
 *
 *
 * POST --> exerciseID, metric {weight, reps, dateTime}
 * server
 *  -> if exerciseID, find dateTime -> add weight, reps
 *  -> should have a metric id --> associate metric id with user id?
 *
 */
