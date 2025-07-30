import type { MetricDataType } from "./ExerciseMetricsAddNew";

const DATESTRINGOFPASTLIMIT = "2025-01-01";

export function isValidFormSubmission(metricData: MetricDataType): boolean {
  if (!isDateValid(metricData.dateTime)) return false;
  if (!isWeightValid(metricData.weight)) return false;
  if (!isRepsValid(metricData.reps)) return false;

  return true;
}

export function isDateValid(queryDateString: string): boolean {
  if (isDateInFuture(queryDateString)) return false;
  if (isDateTooFarInPast(queryDateString)) return false;

  return true;
}

function isDateInFuture(queryDateString: string): boolean {
  const [queryDate, currentDate] = prepareDatesForComparison([
    queryDateString,
    new Date().toDateString(),
  ]);

  if (queryDate.getTime() > currentDate.getTime()) return true;

  return false;
}

/**
 * Bad function name but what can you do
 */
function isDateTooFarInPast(queryDateString: string) {
  const [queryDate, pastLimitDate] = prepareDatesForComparison([
    queryDateString,
    DATESTRINGOFPASTLIMIT,
  ]);

  if (queryDate.getTime() < pastLimitDate.getTime()) return true;

  return false;
}

function prepareDatesForComparison(queryDates: string[]) {
  const queryDateObjects = queryDates.map((queryDate) => {
    const dateObject = new Date(queryDate);
    dateObject.setHours(0, 0, 0, 0);
    return dateObject;
  });

  return queryDateObjects;
}

export function isWeightValid(weightIn: number): boolean {
  return false;
}

export function isRepsValid(repsIn: number): boolean {
  return false;
}
