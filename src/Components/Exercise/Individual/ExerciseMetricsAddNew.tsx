import React, { useState } from "react";

type Props = {
  exerciseID: string;
};

type FormData = {
  weight: number;
  reps: number;
  dateTime: string;
};

function ExerciseMetricsNew({ exerciseID }: Props) {
  const [metricData, setMetricData] = useState<FormData>({
    weight: 0,
    reps: 0,
    dateTime: new Date().toDateString(),
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMetricData((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(metricData);
  }

  return (
    <section>
      <p>Add New</p>
      <form style={{ display: "flex", gap: "10px" }}>
        <label>
          Date
          <input
            type="date"
            name="dateTime"
            value={new Date(metricData.dateTime).toDateString()}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: "flex", gap: "10px" }}>
          weight
          <input
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
            type="number"
            name="reps"
            value={metricData.reps}
            onChange={handleChange}
          />
        </label>
      </form>
    </section>
  );
}

export default ExerciseMetricsNew;
