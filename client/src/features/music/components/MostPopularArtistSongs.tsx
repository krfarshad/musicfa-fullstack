import { MusicCard, Section } from "@/components";
import { Grid2 } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMusics } from "../api/getMusics";

type Props = {
  artist: string;
};
const MostPopularArtistSongs = (props: Props) => {
  const { artist } = props;
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
            <Section title="Most popular songs">
              <Grid2 container spacing={1}>
                {data.data.map((music, index) => (
                  <Grid2 size={12} key={`music_${music.id}`}>
                    <MusicCard
                      key={`music_${music.name}`}
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
export default MostPopularArtistSongs;
