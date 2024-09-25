"use client";
import { ChildrenProps } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import clsx from "clsx";


interface Props extends ChildrenProps {
  options?: EmblaOptionsType;
  gap?: `gap-${string}`;
  className?: string;
}
export type { EmblaOptionsType as SliderOptions };

export const Carousel = (props: Props) => {
  const { children, gap, className } = props;

  const [emblaRef] = useEmblaCarousel();
  const classes = clsx(
    "embla__container flex",
    gap ? gap : "gap-3",
    className ? className : "",
  );

  return (
    <>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className={classes}>{children}</div>
      </div>
    </>
  );
};
