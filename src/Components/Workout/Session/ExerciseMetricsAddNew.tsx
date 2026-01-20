import React, { useState } from "react";
import { convertDateToInputStringFormat } from "../../../Utility/DateFormat";
import { isValidFormSubmission } from "./MetricFormValidation";
import useUserExerciseMutation from "../../../Hooks/useUserExerciseMutation";
import type { MetricFormDataType } from "./MetricFormDataType";

type Props = {
  exerciseID: string;
};

function ExerciseMetricsNew({ exerciseID }: Props) {
  const initialState: MetricFormDataType = {
    weight: 0,
    reps: 0,
    dateTime: convertDateToInputStringFormat(new Date().toString()),
  };

  const [metricData, setMetricData] =
    useState<MetricFormDataType>(initialState);

  const mutation = useUserExerciseMutation({ exerciseID });

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
    mutation.mutate({ exerciseID, newMetric: metricData });
    if (!mutation.isSuccess) return;
    setMetricData(initialState);
  }

  return (
    <section>
      {mutation.isError && (
        <>
          <h2>error: {mutation.error.message}</h2>
        </>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col gap-y-2"
      >
        <label className="w-full h-full grid grid-cols-5 gap-4">
          <span className="col-span-1">Weight</span>
          <input
            min={0}
            type="number"
            name="weight"
            value={metricData.weight}
            onChange={handleChange}
            className="w-full border border-white/5 col-span-3 rounded-lg px-2"
          />
          <span className="">kg</span>
        </label>

        <label className="w-full h-full grid grid-cols-5 gap-4">
          <span className="col-span-1">Reps</span>
          <input
            min={0}
            type="number"
            name="reps"
            value={metricData.reps}
            onChange={handleChange}
            className="w-full border border-white/5 col-span-3 rounded-lg px-2"
          />
        </label>
        <button
          type="submit"
          className="border border-white/5 rounded-lg bg-white/5 cursor-pointer transition-all duration-300 hover:font-bold hover:scale-101"
        >
          Add New
        </button>
      </form>
    </section>
  );
}

export default ExerciseMetricsNew;
