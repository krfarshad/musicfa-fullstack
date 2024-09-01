import { ApiResponse } from "@/types";
import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export type Props<Tu, Tures> = {
  updateFn: MutationFunction<ApiResponse<Tures>, { id: number; values: Tu }>;
  queryKey: string[];
};

const useUpdate = <Tu = undefined, Tures = undefined>(
  props: Props<Tu, Tures>,
) => {
  const { updateFn, queryKey } = props;
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateFn,
    onSuccess: (res: any) => {
      if (res.status) {
        queryClient.invalidateQueries({ queryKey: queryKey });
        return res.status;
      } else {
        return false;
      }
    },
    onError: () => {
      return false;
    },
  });

  const update = async ({ id, values }: { id: number; values: Tu }) => {
    const data = updateMutation.mutateAsync({ id, values });
    return data;
  };

  return { update };
};

export default useUpdate;
