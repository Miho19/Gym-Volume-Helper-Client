import { http, HttpResponse } from "msw";
import { toURL } from ".";
import type { ExerciseListElement } from "../Components/Exercise/ExerciseTypes";

export const exerciseHandlers = [http.get(toURL("/me/exercise"), getExercise)];

function getExercise() {
  return HttpResponse.json({
    index: 0,
    next: null,
    items: exerciseList,
  });
}

const exerciseList: ExerciseListElement[] = [
  {
    name: "Incline Hammer Curls",
    img: "https://static.strengthlevel.com/images/exercises/incline-hammer-curl/incline-hammer-curl-800.jpg",
    pageLink: "/exercise/1",
    id: "12345",
    details: {
      equipment: [],
      bodyParts: [],
      targetMuscle: "",
      secondaryMuscles: "",
      videoURL: "",
      instructions: [],
      tips: [],
      relatedExercises: [],
    },
  },
];
