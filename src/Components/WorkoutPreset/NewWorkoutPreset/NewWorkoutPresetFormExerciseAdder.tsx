import { useState } from "react";
import type { NewWorkoutPresetFormDataType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<NewWorkoutPresetFormDataType>
  >;
};

function NewWorkoutPresetFormExerciseAdder(props: Props) {
  const [exerciseName, setExerciseName] = useState<string>("");

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { setFormData } = props;

    setFormData((previous: NewWorkoutPresetFormDataType) => {
      const previousExerciseList = previous.exerciseNameList;

      if (
        previousExerciseList.findIndex(
          (exercise) => exercise === exerciseName
        ) !== -1
      )
        return previous;

      previousExerciseList.push(exerciseName);

      setExerciseName("");

      return { ...previous, exerciseNameList: previousExerciseList };
    });
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setExerciseName(value);
  }

  return (
    <>
      <label>
        Exercise Name
        <input
          type="text"
          name="exerciseName"
          value={exerciseName}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>Add</button>
      </label>
    </>
  );
}

export default NewWorkoutPresetFormExerciseAdder;
