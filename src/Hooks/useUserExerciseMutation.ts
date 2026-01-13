import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTUserExcerciseMetric } from "../Http/Request/POSTUserExerciseMetric";
import type { MetricFormDataType } from "../Components/Exercise/Metrics/MetricFormDataType";

type Props = {
  exerciseID: string;
};

type MutationFunctionParams = {
  exerciseID: string;
  newMetric: MetricFormDataType;
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
        queryKey: [`user exercise metric ${props.exerciseID}`],
      });
    },
  });
}

export default useUserExerciseMutation;
