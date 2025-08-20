import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetOwnerPanel(props: Props) {
  const { workout } = props;

  return (
    <section>
      <p>{workout.ownerName}</p>
      <img
        src={workout.ownerProfilePictureURL}
        alt={`profile picture of ${workout.ownerName}`}
      />
    </section>
  );
}

export default WorkoutPresetOwnerPanel;
