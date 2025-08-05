import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  ExerciseMetric,
  UserExerciseMetricsResponseType,
} from "../../Http/ResponseType/UserExerciseMetricsResponseType";
import type { POSTUserMetricRequestBody } from "../../Http/RequestFunctions/POSTUserExerciseMetric";
import { prepareDatesForComparison } from "../../Components/Exercise/Individual/MetricFormDateValidation";

/**
 *
 * Doing this because server is like 1 week away
 *
 */

type MetricsParams = {
  exerciseID: string;
};

export const exerciseMetricsHandlers = [
  http.get<MetricsParams, undefined, UserExerciseMetricsResponseType>(
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
  http.post<MetricsParams, POSTUserMetricRequestBody, undefined>(
    toURL("/me/exercise/:exerciseID"),
    async ({ params, request }) => {
      const { exerciseID } = params;

      const { exerciseID: requestExerciseID, metric: requestMetric } =
        await request.json();

      if (exerciseID !== requestExerciseID) return HttpResponse.error();

      UserExerciseMetrics = UserExerciseMetrics.filter((metric) => {
        if (metric.exerciseID !== exerciseID) return metric;

        const [dateA, dateB] = prepareDatesForComparison([
          metric.dateTime.toDateString(),
          requestMetric.dateTime,
        ]);

        if (dateA.getTime() !== dateB.getTime()) return metric;

        metric.reps.push(requestMetric.reps);
        metric.weight.push(requestMetric.weight);

        return metric;
      });

      return new HttpResponse({}, { status: 200 });
    }
  ),
];

let testUserMetric: ExerciseMetric = {
  exerciseID: "K6NnTv0",
  metricID: "1",
  dateTime: new Date(),
  weight: [8, 8, 8],
  reps: [12, 8, 10],
};

let UserExerciseMetrics: ExerciseMetric[] = [testUserMetric];
