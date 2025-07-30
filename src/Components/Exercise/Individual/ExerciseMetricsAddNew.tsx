import React, { useState } from "react";
import { convertDateToInputStringFormat } from "../../../Utility/DateFormat";
import { isValidFormSubmission } from "./MetricFormDateValidation";

type Props = {
  exerciseID: string;
};

export type MetricDataType = {
  weight: number;
  reps: number;
  dateTime: string;
};

function ExerciseMetricsNew({ exerciseID }: Props) {
  const [metricData, setMetricData] = useState<MetricDataType>({
    weight: 0,
    reps: 0,
    dateTime: convertDateToInputStringFormat(new Date().toString()),
  });

  const calendarSelectorName = "dateTime";

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target;

    if (name === calendarSelectorName) {
      value = convertDateToInputStringFormat(value);
    }
    setMetricData((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidFormSubmission(metricData)) return;
  }

  return (
    <section>
      <form
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          Date
          <input
            type="date"
            name={calendarSelectorName}
            value={metricData.dateTime}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", gap: "10px" }}>
          weight
          <input
            min={0}
            type="number"
            name="weight"
            value={metricData.weight}
            onChange={handleChange}
          />
          <span>kg</span>
        </label>

        <label style={{ display: "flex", gap: "10px" }}>
          reps
          <input
            min={0}
            type="number"
            name="reps"
            value={metricData.reps}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          style={{
            background: "white",
            border: "1px solid black",
            color: "black ",
          }}
        >
          Add New
        </button>
      </form>
    </section>
  );
}

export default ExerciseMetricsNew;
