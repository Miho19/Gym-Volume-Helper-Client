import { exerciseListHandlers } from "./exerciseListHandlers";
import { exerciseDetailsHandlers } from "./exerciseDetailsHandlers";
import { exerciseMetricsHandlers } from "./exerciseMetricsHandlers";

export const exerciseHandlers = [
  ...exerciseListHandlers,
  ...exerciseDetailsHandlers,
  ...exerciseMetricsHandlers,
];
