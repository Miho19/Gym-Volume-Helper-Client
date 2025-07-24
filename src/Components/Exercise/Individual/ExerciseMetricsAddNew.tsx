import { useState } from "react";

type Props = {
  exerciseID: string;
};

type FormData = {
  weight: number;
  reps: number;
};

function ExerciseMetricsNew({ exerciseID }: Props) {
  const [metricData, setMetricData] = useState<FormData>({
    weight: 0,
    reps: 0,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMetricData((previous) => ({ ...previous, [name]: value }));
  }

  return (
    <section>
      <p>Add New</p>
      <form style={{ display: "flex", gap: "10px" }}>
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
