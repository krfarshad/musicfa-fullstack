"use client";
import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // default 30 seconds query cache 5min -> 30sec
  defaultOptions: { queries: { gcTime: 30 * 1000 } },
});

interface Props extends ChildrenProps {}

const ReactQueryContext = (props: Props) => {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryContext;
