import type { MetricDataType } from "../../Components/Exercise/Individual/ExerciseMetricsAddNew";

type POSTUserMetricParams = {
  exerciseID: string;
  metric: MetricDataType;
};

export async function POSTUserExcerciseMetric(input: POSTUserMetricParams) {
  const { exerciseID, metric } = input;

  if (!exerciseID || exerciseID === undefined)
    throw new Error("Missing exercise ID");

  if (!metric || metric === undefined) throw new Error("Missing metric");

  const fetchOptions: RequestInit = {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ exerciseID, metric }),
    credentials: "include",
  };

  const URL = import.meta.env.DEV
    ? `http://localhost:5052/me/exercise/${exerciseID}`
    : "";

  try {
    const response: Response = await fetch(URL, fetchOptions);

    if (!response.ok) throw new Error("Failed to update exercise metric list");

    return;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    throw new Error("Failed to update exercise metric list");
  }
}
