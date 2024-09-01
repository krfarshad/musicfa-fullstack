import { useMutation, useQueryClient } from "@tanstack/react-query";

export type Props = {
  removeFn: (params: number | string) => any;
  queryKey?: string[];
  routerPush?: string;
};

const useDelete = (props: Props) => {
  const { removeFn, queryKey } = props;
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: removeFn,
    onSuccess: (res: any) => {
      if (res.status) {
        queryKey && queryClient.invalidateQueries({ queryKey: queryKey });
        return res.status;
      } else {
        return false;
      }
    },
    onError: () => {
      return false;
    },
  });

  const remove = async (param: number | string) => {
    return removeMutation.mutateAsync(param);
  };

  return { remove, ...removeMutation };
};

export default useDelete;
