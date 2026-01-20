import type { Path } from "msw";
import { BASEADDRESS } from "../Http/Request/BaseURLAddress";
import { userHandlers } from "./user";
import { workoutHandlers } from "./Workout/Handlers";
import { exerciseHandlers } from "./Exercise/Handler";

export const handlers = [
  ...userHandlers,
  ...workoutHandlers,
  ...exerciseHandlers,
];

export function toURL(path: string): Path {
  const output = new URL(path, BASEADDRESS).toString();
  return output;
}
