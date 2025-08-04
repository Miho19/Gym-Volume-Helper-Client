const reasonableNumberOfReps: number = 50;

export function isRepsValid(repsIn: number): boolean {
  if (!isRepsOverZero(repsIn)) return false;
  if (!isRepsAReasonableNumber(repsIn)) return false;
  return true;
}

function isRepsOverZero(repsIn: number): boolean {
  return repsIn > 0;
}

function isRepsAReasonableNumber(repsIn: number): boolean {
  return repsIn <= reasonableNumberOfReps;
}
