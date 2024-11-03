"use client";

import { Section, SingerCard } from "@/components";
import { getArtists } from "@/features/artist/api/getArtists";
import { Grid2, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const Artists = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
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
            <Section title="Artists" variant="h1">
              <Grid2 container spacing={2}>
                {data.data.map((artist) => (
                  <Box key={`singer_${artist.id}`}>
                    <SingerCard artist={artist} />
                  </Box>
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
