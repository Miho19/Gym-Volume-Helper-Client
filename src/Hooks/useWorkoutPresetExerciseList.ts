import { useQuery } from "@tanstack/react-query";
import { GETWorkoutPreset } from "../Http/RequestFunctions/GETWorkoutPreset";
import { useAuth0 } from "@auth0/auth0-react";
import { GETWorkoutPresetExerciseList } from "../Http/RequestFunctions/GETWorkoutPresetExerciseList";

type Props = {
  workoutID: string;
  exerciseList: string[];
};

export default function useWorkoutPresetExerciseList(props: Props) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`workout exercise list ${props.workoutID}`],
    queryFn: () => GETWorkoutPresetExerciseList(props.exerciseList),
    enabled: isAuthenticated,
  });
}
