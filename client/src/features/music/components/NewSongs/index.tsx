"use client";
import { Section, MusicCard } from "@/components";
import { Grid2 } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMusics } from "../../api/getMusics";
export const NewSongs = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["musics"],
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
            <Section title="Newest Song">
              <Grid2 container spacing={1}>
                {data.data.map((music, index) => (
                  <Grid2 size={{ xs: 12, md: 6 }} key={`music_${music.id}`}>
                    <MusicCard
                      key={`music_${music.title}`}
                      music={music}
                      index={index + 1}
                    />
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
