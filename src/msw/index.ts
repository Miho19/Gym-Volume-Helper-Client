import { exerciseHandlers } from "./Exercise/exercise";
import { userHandlers } from "./user";

export const handlers = [...userHandlers, ...exerciseHandlers];

export function toURL(path: string): string {
  const devBaseURL = "http://localhost:5052";
  return new URL(path, devBaseURL).toString();
}
