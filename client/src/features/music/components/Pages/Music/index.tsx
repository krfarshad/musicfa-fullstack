"use client";

import { Section } from "@/components";
import { getMusic } from "@/features/music/api/getMusic";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

type Props = {
  id: string;
};
export const Music = (props: Props) => {
  const { id } = props;
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["music", id],
    queryFn: async () => await getMusic({ id }),
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    throw new Error(error ? error.message : "Fetch error!");
  }

  if (isSuccess && data.status == 404) {
    return notFound();
  }
  return (
    <>
      {isSuccess && (
        <>
          {data.data ? (
            <Section title={data.data.title} variant="h1">
              {data.data.title}
            </Section>
          ) : (
            <p>Currently there is no data to display!</p>
          )}
        </>
      )}
    </>
  );
};
