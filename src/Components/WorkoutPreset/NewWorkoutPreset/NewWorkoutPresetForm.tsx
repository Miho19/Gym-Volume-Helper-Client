import { useNavigate } from "react-router";
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
    resetForm();
    navigation("/workout");
  }

  function resetForm() {
    setFormData(initialFormState);
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

        <button type="submit">Create Workout Preset</button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}

export default NewWorkoutPresetForm;
