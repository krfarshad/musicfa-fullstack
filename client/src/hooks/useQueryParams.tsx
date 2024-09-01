"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type Props = {
  scroll?: boolean;
};

export const useQueryParams = (props?: Props) => {
  const scroll = props?.scroll ?? false;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const update = (key: string, value: string | null | boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value || value == false) {
      params.set(key, `${value}`);
    } else {
      params.delete(key);
    }
    const newQuery = params.toString();
    const newUrl = newQuery ? `${pathname}?${newQuery}` : pathname;
    router.push(newUrl, { scroll: scroll });
  };

  const replace = (key: string, value: string | null | boolean) => {
    const params = new URLSearchParams();
    if (value || value == false) {
      params.set(key, `${value}`);
      const newQuery = params.toString();
      const newUrl = `${pathname}?${newQuery}`;
      router.replace(newUrl, { scroll: scroll });
    } else {
      router.replace(pathname, { scroll: scroll });
    }
  };

  const get = (key: string) => {
    return searchParams.get(key);
  };

  const reset = () => {
    router.push(pathname, { scroll: scroll });
  };

  const has = (key: string) => {
    return searchParams.has(key);
  };
  return { update, get, searchParams, router, pathname, reset, has, replace };
};
