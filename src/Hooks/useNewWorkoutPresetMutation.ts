import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { NewWorkoutPresetFormDataType } from "../Http/ResponseType/UserWorkoutPresetsResponseType";
import { useAuth0 } from "@auth0/auth0-react";
import { POSTUserWorkoutList } from "../Http/RequestFunctions/POSTUserWorkoutList";

type MutationFunctionParams = {
  newWorkoutPreset: NewWorkoutPresetFormDataType;
};

function useNewWorkoutPresetMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: (input: MutationFunctionParams) =>
      POSTUserWorkoutList(input.newWorkoutPreset),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${user?.name} workout preset list`],
      });
    },
  });
}

export default useNewWorkoutPresetMutation;
