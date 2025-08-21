import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetOwnerPanel(props: Props) {
  const { workout } = props;

  return (
    <section style={{ border: "1px solid white" }}>
      <p>{workout.ownerName}</p>
      <img
        style={{ width: "50px", height: "50px" }}
        src={workout.ownerProfilePictureURL}
        alt={`profile picture of ${workout.ownerName}`}
      />
    </section>
  );
}

export default WorkoutPresetOwnerPanel;
