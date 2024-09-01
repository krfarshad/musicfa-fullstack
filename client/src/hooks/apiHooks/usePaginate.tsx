import { conf } from "@/config";
import { MetaResponse } from "@/types";

const usePaginate = (
  res: MetaResponse | undefined,
): { hasLoadMore: boolean } => {
  let hasLoadMore = false;
  if (res) {
    const { current_page, last_page } = res;
    hasLoadMore = current_page != last_page ? true : false;
  }

  return { hasLoadMore };
};
export default usePaginate;
