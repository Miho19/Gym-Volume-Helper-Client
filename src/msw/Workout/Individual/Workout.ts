import { http, HttpResponse } from "msw";
import { toURL } from "../..";
import { userWorkoutList } from "../WorkoutExamples";

export const individualWorkoutHandlers = [
  http.get<{ workoutId: string }>(toURL("workout/:workoutId"), ({ params }) => {
    const { workoutId } = params;
    const workout = userWorkoutList.filter((w) => w.id === workoutId);
    return HttpResponse.json(workout);
  }),
];
