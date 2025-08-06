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

      const index = UserExerciseMetrics.findIndex((metric) => {
        const [dateA, dateB] = prepareDatesForComparison([
          metric.dateTime.toDateString(),
          requestMetric.dateTime,
        ]);

        if (metric.exerciseID !== exerciseID) return false;

        if (dateA.getTime() !== dateB.getTime()) return false;

        return true;
      });

      if (index !== -1) {
        const currentMetric = UserExerciseMetrics[index];
        currentMetric.reps.push(requestMetric.reps);
        currentMetric.weight.push(requestMetric.weight);
        return new HttpResponse({}, { status: 200 });
      }

      const newMetric: ExerciseMetric = {
        exerciseID,
        metricID: String(++currentMetricID),
        dateTime: new Date(requestMetric.dateTime),
        weight: [requestMetric.weight],
        reps: [requestMetric.reps],
      };

      UserExerciseMetrics.push(newMetric);

      return new HttpResponse({}, { status: 200 });
    }
  ),
];

let currentMetricID = 1;

let testUserMetric: ExerciseMetric = {
  exerciseID: "K6NnTv0",
  metricID: String(currentMetricID),
  dateTime: new Date(),
  weight: [8, 8, 8],
  reps: [12, 8, 10],
};

const UserExerciseMetrics: ExerciseMetric[] = [testUserMetric];
