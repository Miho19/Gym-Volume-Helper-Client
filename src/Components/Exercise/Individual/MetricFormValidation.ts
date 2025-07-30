import type { MetricDataType } from "./ExerciseMetricsAddNew";
import { isDateValid } from "./MetricFormDateValidation";
import { isRepsValid } from "./MetricFormRepsValidation";
import { isWeightValid } from "./MetricFormWeightValidation";

export function isValidFormSubmission(metricData: MetricDataType): boolean {
  if (!isDateValid(metricData.dateTime)) return false;
  if (!isWeightValid(metricData.weight)) return false;
  if (!isRepsValid(metricData.reps)) return false;

  return true;
}
