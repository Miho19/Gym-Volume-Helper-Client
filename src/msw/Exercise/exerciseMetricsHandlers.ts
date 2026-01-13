import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  ExerciseMetric,
  UserExerciseMetricsResponseType,
} from "../../Http/Response/UserExerciseMetricsResponseType";
import type { POSTUserMetricRequestBody } from "../../Http/Request/POSTUserExerciseMetric";
import { prepareDatesForComparison } from "../../Components/Exercise/Metrics/MetricFormDateValidation";
import { addNewMetric, currentMetricID, UserExerciseMetrics } from "./exercise";

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
        currentMetric.sets.push({
          reps: requestMetric.reps,
          weight: requestMetric.weight,
        });
        return new HttpResponse({}, { status: 200 });
      }

      const newMetric: ExerciseMetric = {
        exerciseID,
        metricID: "",
        dateTime: new Date(requestMetric.dateTime),
        sets: [{ weight: requestMetric.weight, reps: requestMetric.reps }],
      };

      addNewMetric(newMetric);

      return new HttpResponse({}, { status: 200 });
    }
  ),
];
