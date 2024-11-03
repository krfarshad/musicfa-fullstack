"use client";
import { Box, Stack } from "@mui/material";
import LoginBg from "../assets/login-bg.svg";
import Image from "next/image";
import { memo } from "react";

const Background = () => {
  return (
    <Box position="absolute" bottom={0} width={1} zIndex={-10}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box sx={{ width: "50%" }} textAlign="right">
          <Image
            style={{ transform: "rotateY(180deg)" }}
            width={500}
            src={LoginBg.src}
            height="150"
            objectFit="cover"
            alt="welcome back"
            className="h-auto max-w-full"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Image
            width={500}
            height="150"
            objectFit="cover"
            src={LoginBg.src}
            alt="welcome back"
            className="h-auto max-w-full"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default memo(Background);
