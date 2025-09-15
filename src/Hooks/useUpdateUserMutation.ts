import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PATCHInitialiseUser } from "../Http/RequestFunctions/PATCHInitialiseUser";
import type { UserBodyResponseTypePATCH } from "../Http/ResponseType/UserResponseType";

type MutationFunctionParams = {
  updateUserBody: UserBodyResponseTypePATCH;
};

function useUpdateUserMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MutationFunctionParams) =>
      PATCHInitialiseUser({ updateUserBody: input.updateUserBody }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`auth0 Initialise User`],
      });
    },
  });
}

export default useUpdateUserMutation;
