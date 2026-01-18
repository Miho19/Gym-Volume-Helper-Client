import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { DELETEUserWorkout } from "../../Http/Request/Workout/DELETEUserWorkout";
import { userWorkoutListQueryKey } from "./useUserWorkoutListQuery";

function useDeleteWorkoutMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: (workoutId: string) => DELETEUserWorkout(workoutId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userWorkoutListQueryKey(user?.name)],
      });
    },
  });
}

export default useDeleteWorkoutMutation;
