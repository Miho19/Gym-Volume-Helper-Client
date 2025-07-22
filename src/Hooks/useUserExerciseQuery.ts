import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserExercise } from "../Http/RequestFunctions/GETUserExercise";

type Props = {
  exerciseID: string | undefined;
};

export default function useUserExerciseQuery(props: Props) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`exercise ${props.exerciseID}`],
    queryFn: () => GETUserExercise(props.exerciseID),
    enabled: isAuthenticated,
  });
}
