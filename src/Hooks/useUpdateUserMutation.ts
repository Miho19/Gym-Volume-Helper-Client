import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PUTUserProfile } from "../Http/Request/UserProfile/PUTUserProfile";
import type { UserProfile } from "../Zod/UserSchema";
import { USEUSERPROFILEQUERYKEY } from "./User/useUserProfileQuery";

function useUpdateUserMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userProfile: UserProfile) => PUTUserProfile(userProfile),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USEUSERPROFILEQUERYKEY],
      });
    },
  });
}

export default useUpdateUserMutation;
