"use client";
import { NetworkStatus } from "@/features/error";
import { ChildrenProps } from "@/types";
import NextTopLoader from "nextjs-toploader";
import { memo } from "react";
import { SessionProvider } from "next-auth/react";
import MUIProvider from "./MUI/MUIProvider";

interface Props extends ChildrenProps {}

const AppProvider = (props: Props) => {
  const { children } = props;
  return (
    <SessionProvider>
      <MUIProvider>
        <NextTopLoader color={`var(--primary)`} showSpinner={false} />
        {children}
        <NetworkStatus />
      </MUIProvider>
    </SessionProvider>
  );
};

export default memo(AppProvider);
