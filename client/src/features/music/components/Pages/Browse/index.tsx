"use client";

import { Section, MusicCard } from "@/components";
import { getMusics } from "@/features/music/api/getMusics";
import { Grid2 } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const Browse = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getMusics,
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    throw new Error(error ? error.message : "Fetch error!");
  }

  return (
    <>
      {isSuccess && (
        <>
          {data.data.length ? (
            <Section title="Browse Musics" variant="h1">
              <Grid2 container spacing={1}>
                {data.data.slice(1).map((music, index) => (
                  <Grid2 size={{ xs: 12, md: 6 }} key={`music_${music.id}`}>
                    <MusicCard music={music} index={index + 1} />
                  </Grid2>
                ))}
              </Grid2>
            </Section>
          ) : (
            <p>Currently there is no data to display!</p>
          )}
        </>
      )}
    </>
  );
};
