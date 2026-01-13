import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PUTUserProfile } from "../Http/Request/User/PUTInitialiseUser";
import type { UserProfile } from "../Zod/UserSchema";

function useUpdateUserMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userProfile: UserProfile) => PUTUserProfile(userProfile),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`auth0 Initialise User`],
      });
    },
  });
}

export default useUpdateUserMutation;
