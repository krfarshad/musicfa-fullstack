"use client";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  successMessage?: string;
  failedMessage?: string;
  timeOut?: number;
};

export const useCopy = (props?: Props) => {
  const {
    successMessage = "Item copied to your clipboard.",
    failedMessage = "Failed to copy.",
    timeOut = 2000,
  } = props || {};

  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopy(true);
          toast.success(successMessage);
          setTimeout(() => {
            setCopy(false);
          }, timeOut);
        })
        .catch(() => {
          toast.error(failedMessage);
        });
    }
  };

  return { copy, setCopy, handleCopy };
};
