import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetHeader(props: Props) {
  const { workout } = props;

  return (
    <section className="bg-[#31363F] w-full border border-white/5 rounded-lg flex flex-row gap-x-5 items-center p-3">
      <img
        src={workout.workoutImgURL}
        alt={`workout header image`}
        className="w-16 h-16 border border-white/5 rounded-full object-fit"
      />

      <h2 className="text-lg font-medium">{workout.workoutName}</h2>
    </section>
  );
}

export default WorkoutPresetHeader;
