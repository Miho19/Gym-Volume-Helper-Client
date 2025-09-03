import { exerciseDetailsHandlers } from "./exerciseDetailsHandlers";
import { exerciseMetricsHandlers } from "./exerciseMetricsHandlers";

export const exerciseHandlers = [
  ...exerciseDetailsHandlers,
  ...exerciseMetricsHandlers,
];
