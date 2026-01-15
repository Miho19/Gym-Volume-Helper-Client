import type { Workout } from "../../../Zod/WorkoutSchema";

type Props = {
  workout: Workout;
};

function WorkoutOwnerPanel(props: Props) {
  const { workout } = props;

  return (
    <section className="w-full border border-white/5 bg-[#31363F] p-3 flex flex-row items-center gap-x-5 rounded-lg">
      <img
        className="w-10 h-10 border border-white/5 rounded-full object-fill"
        src={workout.ownerPictureSource}
        alt={`profile picture of ${workout.ownerName}`}
      />
      <p>{workout.ownerName}</p>
    </section>
  );
}

export default WorkoutOwnerPanel;
