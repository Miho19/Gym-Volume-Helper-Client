import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserExerciseMetrics } from "../Http/ResponseType/UserExerciseResponseType";
import { POSTUserExcerciseMetric } from "../Http/RequestFunctions/POSTUserExerciseMetric";

type Props = {
  exerciseID: string;
};

type MutationFunctionParams = {
  exerciseID: string;
  newMetric: UserExerciseMetrics;
};

function useUserExerciseMutation(props: Props) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MutationFunctionParams) =>
      POSTUserExcerciseMetric({
        exerciseID: input.exerciseID,
        metric: input.newMetric,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`exercise ${props.exerciseID}`],
      });
    },
  });
}

export default useUserExerciseMutation;
