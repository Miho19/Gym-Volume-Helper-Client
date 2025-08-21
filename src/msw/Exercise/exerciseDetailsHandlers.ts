import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  ExerciseDetailsResponseType,
  ExerciseDetailsType,
} from "../../Http/ResponseType/ExerciseDetailsResponseType";
import type { ExerciseListElement } from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

const testExerciseDetails: ExerciseDetailsType = {
  name: "Bench Press",
  imgURL: "Barbell-Bench-Press_Chest.png",
  equipment: ["Barbell"],
  bodyParts: ["Chest"],
  targetMuscle: ["Pectoralis Major Clavicular Head"],
  secondaryMuscles: [
    "Deltoid Anterior",
    "Pectoralis Major Clavicular Head",
    "Triceps Brachii",
  ],
  videoURL: "Barbell-Bench-Press_Chest_.mp4",
  instructions: [
    "Grip the barbell with your hands slightly wider than shoulder-width apart, palms facing your feet, and lift it off the rack, holding it straight over your chest with your arms fully extended.",
    "Slowly lower the barbell down to your chest while keeping your elbows at a 90-degree angle.",
    "Once the barbell touches your chest, push it back up to the starting position while keeping your back flat on the bench.",
    "Repeat this process for the desired number of repetitions, always maintaining control of the barbell and ensuring your form is correct.",
  ],
  exerciseTips: [
    "Avoid Arching Your Back: One common mistake is excessively arching the back during the lift. This can lead to lower back injuries. Your lower back should have a natural arch, but it should not be overly exaggerated. Your butt, shoulders, and head should maintain contact with the bench at all times.",
    "Controlled Movement: Avoid the temptation to lift the barbell too quickly. A controlled, steady lift is more effective and reduces the risk of injury. Lower the bar to your mid-chest slowly, pause briefly, then push it back up without locking your elbows at the top.",
    "Don't Lift Alone:",
  ],
  relatedExercises: [
    "U0uPZBq",
    "QD32SbB",
    "pdm4AfV",
    "SebLXCG",
    "T3JogV7",
    "hiWPEs1",
    "Y5ppDdt",
    "C8OV7Pv",
    "r3tQt3U",
    "dCSgT7N",
  ],
  overview:
    "The Bench Press is a classic strength training exercise that primarily targets the chest, shoulders, and triceps, contributing to upper body muscle development. It is suitable for anyone, from beginners to professional athletes, looking to improve their upper body strength and muscular endurance. Individuals may want to incorporate bench press into their routine for its effectiveness in enhancing physical performance, promoting bone health, and improving body composition.",
};

type GETMinExerciseParams = {
  exerciseID: string;
};

export const exerciseDetailsHandlers = [
  http.get<GETMinExerciseParams, undefined, ExerciseListElement>(
    toURL("/min/exercise/:id"),
    ({ params }) => {
      const { exerciseID } = params;
    }
  ),
];
