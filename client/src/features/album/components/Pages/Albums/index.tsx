"use client";
import { AlbumCard, Section } from "@/components";
import { albumList } from "@/features/album/api/albumList";
import { Grid2, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const Albums = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["albums"],
    queryFn: albumList,
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
            <Section title="Albums" variant="h1">
              <Grid2 container spacing={2}>
                {data.data.map((album) => (
                  <Box key={`album_${album.id}`}>
                    <AlbumCard album={album} />
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
