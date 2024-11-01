"use client";
import { NetworkStatus } from "@/features/error";
import { ChildrenProps } from "@/types";
import NextTopLoader from "nextjs-toploader";
import { memo } from "react";
import { SessionProvider } from "next-auth/react";
import MUIProvider from "./MUI/MUIProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props extends ChildrenProps {}

const AppProvider = (props: Props) => {
  const { children } = props;

  const queryClient = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <MUIProvider>
          <NextTopLoader color={`var(--primary)`} showSpinner={false} />
          {children}
          <NetworkStatus />
        </MUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default memo(AppProvider);
