export function isWeightValid(weightIn: number): boolean {
  if (!isWeightOverZero(weightIn)) return false;
  if (isWeightTooHeavy(weightIn)) return false;

  return true;
}

function isWeightOverZero(weightIn: number): boolean {
  return weightIn > 0;
}

function isWeightTooHeavy(weightIn: number): boolean {
  return weightIn > 2500;
}
