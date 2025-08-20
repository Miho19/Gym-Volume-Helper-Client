import type { WorkoutPresetType } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  preset: WorkoutPresetType;
};

function WorkoutPreset(props: Props) {
  const { preset } = props;

  return (
    <li>
      <p>{preset.name}</p>
      <img src={preset.imgURL} alt={`image of ${preset.name} preset`} />

      <div>
        <img
          src={preset.ownerProfilePictureURL}
          alt={`profile picture of the user ${preset.ownerName}`}
        />
        <p>{preset.ownerName}</p>
      </div>
    </li>
  );
}

export default WorkoutPreset;
