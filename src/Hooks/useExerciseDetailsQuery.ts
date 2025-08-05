import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETExerciseDetails } from "../Http/RequestFunctions/GETExerciseDetails";

type Props = {
  exerciseID: string;
};

export default function useExerciseDetailsQuery(props: Props) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`exercise ${props.exerciseID}`],
    queryFn: () => GETExerciseDetails(props.exerciseID),
    enabled: isAuthenticated,
  });
}
