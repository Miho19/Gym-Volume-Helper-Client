import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import type { NewWorkoutFormType } from "../../Zod/NewWorkoutFormSchema";
import { POSTUserWorkoutList } from "../../Http/Request/Workout/POSTUserWorkoutList";
import { userWorkoutListQueryKey } from "./useUserWorkoutListQuery";
import type { Workout } from "../../Zod/WorkoutSchema";
import { generateWorkoutQueryKey } from "./useWorkoutQuery";

function useNewWorkoutMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: (newWorkoutForm: NewWorkoutFormType) =>
      POSTUserWorkoutList(newWorkoutForm),
    onSuccess: (newWorkout: Workout) => {
      queryClient.invalidateQueries({
        queryKey: [userWorkoutListQueryKey(user?.name)],
      });

      queryClient.setQueryData(
        [generateWorkoutQueryKey(newWorkout.id)],
        newWorkout
      );
    },
  });
}

export default useNewWorkoutMutation;
