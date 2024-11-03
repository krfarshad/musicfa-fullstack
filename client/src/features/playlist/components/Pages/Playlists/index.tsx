"use client";

import { PlayListCard, Section } from "@/components";
import { getPlaylists } from "@/features/playlist/api/getPlaylists";
import { Grid2 } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const Playlists = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylists,
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
            <Section title="Playlists" variant="h1">
              <Grid2 container spacing={1}>
                {data.data.map((playlist) => (
                  <Grid2
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    key={`playlist_${playlist.id}`}
                  >
                    <PlayListCard playlist={playlist} />
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
