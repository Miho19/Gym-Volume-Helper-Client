import type { Workout } from "../../Zod/WorkoutSchema";

const workout1: Workout = {
  id: "1",
  name: "Workout 1",
  pictureSource: "https://picsum.photos/id/237/200/300",
  ownerId: "12345",
  ownerName: "Josh April",
  ownerPictureSource: "https://picsum.photos/id/12/200/300",
};

const workout2: Workout = {
  id: "2",
  name: "Workout 2",
  pictureSource: "https://picsum.photos/id/56/200/300",
  ownerId: "12345",
  ownerName: "Josh April",
  ownerPictureSource: "https://picsum.photos/id/12/200/300",
};

// eslint-disable-next-line prefer-const
let userWorkoutList: Workout[] = [workout1, workout2];

export { userWorkoutList };
