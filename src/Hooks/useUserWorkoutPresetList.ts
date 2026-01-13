import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { GETUserWorkoutPresetList } from "../Http/Request/GETUserWorkoutPresetList";

export default function useUserWorkoutPresetList() {
  const { isAuthenticated, user } = useAuth0();
  return useQuery({
    queryKey: [`${user?.name} workout preset list`],
    queryFn: () => GETUserWorkoutPresetList(),
    enabled: isAuthenticated,
  });
}
