import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTUserExcerciseMetric } from "../Http/RequestFunctions/POSTUserExerciseMetric";
import type { MetricDataType } from "../Components/Exercise/Individual/ExerciseMetricsAddNew";

type Props = {
  exerciseID: string;
};

type MutationFunctionParams = {
  exerciseID: string;
  newMetric: MetricDataType;
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
