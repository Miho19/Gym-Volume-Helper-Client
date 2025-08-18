import type { WorkoutPresetType } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  ownerName: string;
  ownerProfilePictureURL: string;
  preset: WorkoutPresetType;
};

function WorkoutPreset(props: Props) {
  const { preset, ownerName, ownerProfilePictureURL } = props;

  return (
    <article>
      <p>{preset.name}</p>
      <img src={preset.imgURL} alt={`image of ${preset.name} preset`} />

      <div>
        <img
          src={ownerProfilePictureURL}
          alt={`profile picture of the user ${ownerName}`}
        />
        <p>{ownerName}</p>
      </div>
    </article>
  );
}

export default WorkoutPreset;
