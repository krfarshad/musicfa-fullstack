"use client";
import { getArtist } from "../../../api/getArtist";
import { Section } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

type Props = {
  username: string;
};
export const Artist = (props: Props) => {
  const { username } = props;

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["artist", username],
    queryFn: async () => await getArtist({ username }),
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
          {data.data && (
            <Section title={data.data.name} variant="h1">
              {data.data.name}
            </Section>
          )}
        </>
      )}
    </>
  );
};
