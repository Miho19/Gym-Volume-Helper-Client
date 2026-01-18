import { useNavigate } from "react-router";
import { useState } from "react";
import useNewWorkoutPresetMutation from "../../../Hooks/Workout/useNewWorkoutPresetMutation";
import type { NewWorkoutFormType } from "../../../Zod/NewWorkoutFormSchema";

const initialFormState: NewWorkoutFormType = {
  name: "",
  pictureSource: "",
  exerciseNameList: [],
};

function NewWorkoutForm() {
  const navigation = useNavigate();
  const mutation = useNewWorkoutPresetMutation();

  const [formData, setFormData] = useState(initialFormState);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutation.mutate(formData);
    // handle errors
    resetForm();
    navigation("/workout");
  }

  function resetForm() {
    setFormData(initialFormState);
  }

  return (
    <form
      className="w-full h-full flex flex-col gap-y-5"
      onSubmit={handleOnSubmit}
    >
      <section className="w-full h-full flex flex-col border border-white/5 bg-[#31363F] rounded-lg p-3 gap-y-5">
        <label className="w-full h-full grid grid-cols-5">
          <span className="col-span-2">Workout Name</span>
          <input
            type="text"
            maxLength={25}
            min={3}
            name="workoutName"
            value={formData.name}
            onChange={handleOnChange}
            className="w-full border border-white/5 col-span-3 rounded-lg px-2"
          />
        </label>

        <label className="w-full h-full grid grid-cols-5">
          <span className="col-span-2">Workout Picture</span>
          <input
            type="text"
            maxLength={25}
            min={3}
            name="workoutPicture"
            value={formData.pictureSource}
            onChange={handleOnChange}
            className="w-full border border-white/5 col-span-3 rounded-lg px-2"
          />
        </label>
      </section>

      <section className="flex flex-col gap-y-5">
        <button
          type="submit"
          className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
        >
          Create Workout Preset
        </button>
        <button
          type="reset"
          className="border border-white/5 rounded-full w-full h-10 cursor-pointer text-center transition-all duration-300 hover:scale-101 hover:font-bold bg-[#31363F] flex flex-col justify-center items-center"
          onClick={resetForm}
        >
          Reset
        </button>
      </section>
    </form>
  );
}

export default NewWorkoutForm;
