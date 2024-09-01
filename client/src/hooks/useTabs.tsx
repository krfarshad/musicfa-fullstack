import { TabContext, TabContextValue } from "@/providers";
import { useContext } from "react";

const useTabs = <T extends string | number>() => {
  const context = useContext(TabContext) as TabContextValue<T> | undefined;
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabProvider");
  }
  return context;
};

export { useTabs };
