import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { POSTInitialiseUser } from "../Http/RequestFunctions/POSTInitialiseUser";

type Props = {
  exerciseID: string;
};

export default function useUserExerciseQuery(props: Props) {
  const { user, isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`exercise ${props.exerciseID}`],
    queryFn: () => POSTInitialiseUser(user?.sub),
    enabled: isAuthenticated,
  });
}
