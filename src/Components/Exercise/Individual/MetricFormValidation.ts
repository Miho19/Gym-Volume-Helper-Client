import type { MetricDataType } from "./ExerciseMetricsAddNew";

export function isValidFormSubmission(metricData: MetricDataType): boolean {
  if (!isDateValid(metricData.dateTime)) return false;
  if (!isWeightValid(metricData.weight)) return false;
  if (!isRepsValid(metricData.reps)) return false;

  return true;
}

export function isDateValid(dateIn: string): boolean {
  if (isDateInFuture(dateIn)) return false;

  return true;
}

function isDateInFuture(dateIn: string): boolean {
  const currentDate = new Date();
  const queryDate = new Date(dateIn);

  currentDate.setHours(0, 0, 0, 0);
  queryDate.setHours(0, 0, 0, 0);

  if (queryDate.getTime() > currentDate.getTime()) return true;

  return false;
}

export function isWeightValid(weightIn: number): boolean {
  return false;
}

export function isRepsValid(repsIn: number): boolean {
  return false;
}
