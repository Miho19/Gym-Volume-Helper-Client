import { useQuery } from "@tanstack/react-query";
import { GETWorkoutPreset } from "../Http/Request/GETWorkoutPreset";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  workoutId: string | undefined;
};

export default function useWorkoutPresetQuery(props: Props) {
  const { isAuthenticated } = useAuth0();

  return useQuery({
    queryKey: [`workout preset ${props.workoutId}`],
    queryFn: () => GETWorkoutPreset(props.workoutId),
    enabled: isAuthenticated && typeof props.workoutId !== "undefined",
  });
}
