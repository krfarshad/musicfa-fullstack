"use client";
import { useEffect, useRef } from "react";

type Props = {
  callback: Function;
  delay?: number;
};
const useDebounce = (props: Props) => {
  const { delay = 1500, callback } = props;
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFunction = (value: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      callback(value);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return debouncedFunction;
};

export default useDebounce;
