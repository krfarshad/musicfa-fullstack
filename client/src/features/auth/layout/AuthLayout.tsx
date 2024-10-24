import { PropsWithChildren } from "react";
import { Logo } from "@/layouts/Logo";
import { Box, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const LazyBackground = dynamic(() => import("./Background"), { ssr: false });

export const AuthLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Stack direction="row">
      <Stack
        position="relative"
        height="100vh"
        direction="row"
        alignItems="center"
        justifyContent="center"
        flex="wrap"
        width={1}
        zIndex={10}
      >
        <Box className="custom-gradient relative z-20 -mt-8 w-[380px] max-w-full rounded-2xl p-4 pb-10">
          <Box className="pt-4 text-center">
            <Logo />
          </Box>
          <Box>
            <Typography variant="h5" className="mb-2 text-center font-bold">
              Welcome to Musicfa
            </Typography>
            <Typography
              variant="body2"
              className="mb-4 text-center leading-6 text-gray-100"
            >
              Login to have access all features.
            </Typography>
          </Box>
          {children}
        </Box>
        <LazyBackground />
      </Stack>
    </Stack>
  );
};
