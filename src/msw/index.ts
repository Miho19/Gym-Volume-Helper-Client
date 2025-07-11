import { userHandlers } from "./user";

export const handlers = [...userHandlers];

const devBaseURL = "http://localhost:3000/";

export function toURL(path: string): string {
  return new URL(path, devBaseURL).toString();
}
