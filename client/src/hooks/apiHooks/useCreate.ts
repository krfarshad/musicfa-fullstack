import { ApiResponse } from "@/types";
import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export type Props<Tc, Tcres> = {
  createFn: MutationFunction<ApiResponse<Tcres>, Tc>;
  queryKey?: string[];
};

const useCreate = <Tc = undefined, Tcres = undefined>(
  props: Props<Tc, Tcres>,
) => {
  const { createFn, queryKey } = props;
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createFn,
    onSuccess: (res: ApiResponse<Tcres>) => {
      if (res.status && queryKey) {
        queryClient.invalidateQueries({ queryKey: queryKey });
      }
    },
    onError: () => {},
  });

  const create = async (values: Tc) => {
    try {
      const data = await createMutation.mutateAsync(values);
      return { data, isLoading: false, isSuccess: true, isError: false };
    } catch (error) {
      return {
        data: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error,
      };
    }
  };

  return { create, ...createMutation };
};

export default useCreate;
