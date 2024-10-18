import { ChildrenProps } from "@/types";
import clsx from "clsx";

interface Props extends ChildrenProps {
  fullWidth?: boolean;
}

export const CarouselItem = (props: Props) => {
  const { children, fullWidth = false } = props;
  const classes = clsx("embla__slide", fullWidth ? "flex-full" : "");
  return <div className={classes}>{children}</div>;
};
