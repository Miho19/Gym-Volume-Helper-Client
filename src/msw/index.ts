import { exerciseHandlers } from "./Exercise/exercise";
import { userHandlers } from "./user";
import { workoutPresetHandlers } from "./WorkoutPreset/WorkoutPreset";

export const handlers = [
  ...userHandlers,
  ...exerciseHandlers,
  ...workoutPresetHandlers,
];

export function toURL(path: string): string {
  const devBaseURL = "http://localhost:5052";
  return new URL(path, devBaseURL).toString();
}
