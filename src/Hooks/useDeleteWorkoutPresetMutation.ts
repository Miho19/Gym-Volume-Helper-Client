import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { DELETEUserWorkoutPreset } from "../Http/Request/DELETEUserWorkoutPreset";
import { userWorkoutListQueryKey } from "./Workout/useUserWorkoutList";

type MutationFunctionParams = {
  workoutID: string;
};

function useDeleteWorkoutPresetMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: (input: MutationFunctionParams) =>
      DELETEUserWorkoutPreset(input.workoutID),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userWorkoutListQueryKey(user?.name)],
      });
    },
  });
}

export default useDeleteWorkoutPresetMutation;
