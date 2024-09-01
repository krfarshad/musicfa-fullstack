"use client";
import { NetworkStatus } from "@/features/error";
import { ChildrenProps } from "@/types";
import NextTopLoader from "nextjs-toploader";
import { memo } from "react";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/toastCustom.css";
import ReactQueryContext from "./ReactQueryContext";
import { SessionProvider } from "next-auth/react";

interface Props extends ChildrenProps {}

const AppProvider = (props: Props) => {
  const { children } = props;
  return (
    <SessionProvider>
      <NextTopLoader color={`var(--primary)`} showSpinner={false} />
      <ReactQueryContext>{children}</ReactQueryContext>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={3}
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
      <NetworkStatus />
    </SessionProvider>
  );
};

export default memo(AppProvider);
