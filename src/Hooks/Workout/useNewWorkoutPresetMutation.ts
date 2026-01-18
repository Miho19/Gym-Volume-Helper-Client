import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import type { NewWorkoutFormType } from "../../Zod/NewWorkoutFormSchema";
import { POSTUserWorkoutList } from "../../Http/Request/POSTUserWorkoutList";
import { userWorkoutListQueryKey } from "./useUserWorkoutListQuery";

function useNewWorkoutPresetMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: (newWorkoutForm: NewWorkoutFormType) =>
      POSTUserWorkoutList(newWorkoutForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [userWorkoutListQueryKey(user?.name)],
      });
    },
  });
}

export default useNewWorkoutPresetMutation;
