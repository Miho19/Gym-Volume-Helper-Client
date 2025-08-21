import type { UserWorkoutPresetType } from "../../../Http/ResponseType/UserWorkoutPresetsResponseType";

type Props = {
  workout: UserWorkoutPresetType;
};

function WorkoutPresetHeader(props: Props) {
  const { workout } = props;

  return (
    <section style={{ border: "1px solid white" }}>
      <h2>{workout.workoutName}</h2>
      <img
        src={workout.workoutImgURL}
        alt={`workout header image`}
        style={{ width: "50px", height: "50px" }}
      />
    </section>
  );
}

export default WorkoutPresetHeader;
