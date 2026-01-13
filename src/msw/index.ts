import type { Path } from "msw";
import { BASEADDRESS } from "../Http/Request/BaseURLAddress";
import { exerciseHandlers } from "./Exercise/exercise";
import { userHandlers } from "./user";
import { workoutPresetHandlers } from "./WorkoutPreset/WorkoutPreset";

export const handlers = [
  ...userHandlers,
  ...exerciseHandlers,
  ...workoutPresetHandlers,
];

export function toURL(path: string): Path {
  const devBaseURL = `${BASEADDRESS}`;
  const output = new URL(path, devBaseURL).toString();
  return output;
}
