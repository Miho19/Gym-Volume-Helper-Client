import { useState } from "react";

type Props = {
  exerciseID: string;
};

type FormData = {
  weight: number;
  reps: number;
};

function ExerciseMetricsNew(props: Props) {
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
      <label>
        weight:
        <input
          type="number"
          name="weight"
          value={metricData.weight}
          onChange={handleChange}
        />
      </label>

      <label>
        reps:
        <input
          type="number"
          name="reps"
          value={metricData.reps}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}

export default ExerciseMetricsNew;
