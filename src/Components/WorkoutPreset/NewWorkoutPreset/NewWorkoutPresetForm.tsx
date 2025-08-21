import { useNavigate } from "react-router";
import NewWorkoutPresetFormExerciseAdder from "./NewWorkoutPresetFormExerciseAdder";
import { useState } from "react";

export type NewWorkoutPresetFormDataType = {
  workoutName: string;
  workoutPicture: string;
  exerciseNameList: string[];
};

const initialFormState: NewWorkoutPresetFormDataType = {
  workoutName: "",
  workoutPicture: "",
  exerciseNameList: [],
};

function NewWorkoutPresetForm() {
  const navigation = useNavigate();

  const [formData, setFormData] = useState(initialFormState);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  return (
    <>
      <button onClick={() => navigation("/workout")}>Back</button>
      <form style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
      </form>
    </>
  );
}

export default NewWorkoutPresetForm;
