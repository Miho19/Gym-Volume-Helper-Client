import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { GETWorkoutPresetExerciseList } from "../Http/Request/GETWorkoutPresetExerciseList";

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
