import type { ExerciseMetric } from "../../../Http/Response/UserExerciseMetricsResponseType";
import { prepareDatesForComparison } from "./MetricFormDateValidation";

export function sortMetricData(inputList: ExerciseMetric[]): ExerciseMetric[] {
  if (inputList.length === 0 || inputList.length === 1) return inputList;

  return inputList.sort((a, b) => {
    let aDateString: string = "";
    let bDateString: string = "";

    if (a.dateTime instanceof Date) {
      aDateString = a.dateTime.toDateString();
    } else {
      aDateString = a.dateTime;
    }

    if (b.dateTime instanceof Date) {
      bDateString = b.dateTime.toDateString();
    } else {
      bDateString = b.dateTime;
    }

    const [dateA, dateB] = prepareDatesForComparison([
      aDateString,
      bDateString,
    ]);
    if (dateA.getTime() >= dateB.getTime()) return -1;
    return 1;
  });
}
