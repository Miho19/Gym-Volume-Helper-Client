import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserExerciseList } from "../Http/RequestFunctions/GETUserExerciseList";

export default function useExerciseListQuery() {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: ["user exercise list"],
    queryFn: () => GETUserExerciseList(10),
    enabled: isAuthenticated,
  });
}
