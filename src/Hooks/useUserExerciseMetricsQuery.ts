import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserExerciseMetrics } from "../Http/Request/GETUserExerciseMetrics";

type Props = {
  exerciseID: string;
};

export default function useUserExerciseMetricsQuery(props: Props) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`user exercise metric ${props.exerciseID}`],
    queryFn: () => GETUserExerciseMetrics(props.exerciseID),
    enabled: isAuthenticated,
  });
}
