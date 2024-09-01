"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useNetworkStatus from "../hooks/useNetworkStatus";

export const NetworkStatus = () => {
  const isOnline = useNetworkStatus();
  const toastId = "network-status";

  useEffect(() => {
    if (!isOnline) {
      if (!toast.isActive(toastId)) {
        toast.error("Network connection failed", {
          toastId,
          autoClose: false,
          closeOnClick: false,
          closeButton: false,
          draggable: false,
        });
      }
    } else {
      toast.dismiss(toastId);
    }
  }, [isOnline]);

  return null;
};
