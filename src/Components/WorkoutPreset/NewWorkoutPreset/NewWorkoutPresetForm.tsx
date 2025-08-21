import { useNavigate } from "react-router";
import NewWorkoutPresetFormExerciseAdder from "./NewWorkoutPresetFormExerciseAdder";
import { useState } from "react";
import type { NewWorkoutPresetFormDataType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";
import useNewWorkoutPresetMutation from "../../../Hooks/useNewWorkoutPresetMutation";

const initialFormState: NewWorkoutPresetFormDataType = {
  workoutName: "",
  workoutPicture: "",
  exerciseNameList: [],
};

function NewWorkoutPresetForm() {
  const navigation = useNavigate();
  const mutation = useNewWorkoutPresetMutation();

  const [formData, setFormData] = useState(initialFormState);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutation.mutate({ newWorkoutPreset: formData });
    // handle errors
    navigation("/workout");
  }

  return (
    <>
      <button onClick={() => navigation("/workout")}>Back</button>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        onSubmit={handleOnSubmit}
      >
        <label>
          Workout Name
          <input
            type="text"
            maxLength={25}
            min={3}
            name="workoutName"
            value={formData.workoutName}
            onChange={handleOnChange}
          />
        </label>

        <label>
          Workout Picture
          <input
            type="text"
            maxLength={25}
            min={3}
            name="workoutPicture"
            value={formData.workoutPicture}
            onChange={handleOnChange}
          />
        </label>

        <NewWorkoutPresetFormExerciseAdder setFormData={setFormData} />
        <textarea
          name="exerciseNameList"
          value={formData.exerciseNameList.join("\n")}
        />
        <button type="submit">Create Workout Preset</button>
      </form>
    </>
  );
}

export default NewWorkoutPresetForm;
