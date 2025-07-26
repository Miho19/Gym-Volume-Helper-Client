import type { MetricDataType } from "./ExerciseMetricsAddNew";

export function isValidFormSubmission(metricData: MetricDataType): boolean {
  if (!isDateValid(metricData.dateTime)) return false;
  if (!isWeightValid(metricData.weight)) return false;
  if (!isRepsValid(metricData.reps)) return false;

  return true;
}

function isDateValid(dateIn: string): boolean {
  return false;
}

function isWeightValid(weightIn: number): boolean {
  return false;
}

function isRepsValid(repsIn: number): boolean {
  return false;
}
