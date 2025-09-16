import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetOwnerPanel(props: Props) {
  const { workout } = props;

  return (
    <section className="w-full h-full border border-white/5 bg-[#31363F] p-3 flex flex-row items-center gap-x-5 rounded-lg">
      <img
        className="w-10 h-10 border border-white/5 rounded-full"
        src={workout.ownerProfilePictureURL}
        alt={`profile picture of ${workout.ownerName}`}
      />
      <p>{workout.ownerName}</p>
    </section>
  );
}

export default WorkoutPresetOwnerPanel;
