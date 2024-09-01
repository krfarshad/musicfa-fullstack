"use client";
import { ModalContext, ModalContextProp } from "@/providers";
import { useContext } from "react";

export const useModal = (): ModalContextProp => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider!");
  }
  return context;
};
