import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { DELETEUserWorkoutPreset } from "../Http/RequestFunctions/DELETEUserWorkoutPreset";

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
        queryKey: [`${user?.name} workout preset list`],
      });
    },
  });
}

export default useDeleteWorkoutPresetMutation;
