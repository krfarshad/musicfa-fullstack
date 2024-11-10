"use client";
import { MostPopularArtistSongs } from "@/features/music";
import { getArtist } from "../../../api/getArtist";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
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
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Alert severity="error">
          {error ? error.message : "Failed to fetch artist data."}
        </Alert>
      </Box>
    );
  }

  if (isSuccess && data.status == 404) {
    return notFound();
  }

  return (
    <>
      {isSuccess && (
        <>
          {data.data && (
            <>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 4,
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                {/* Avatar */}
                <Avatar
                  src={data.data.avatarUrl}
                  alt={data.data.name}
                  sx={{
                    width: 350,
                    height: 350,
                    borderRadius: "8px",
                    marginRight: 3,
                  }}
                />

                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    {data.data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginTop: 1, maxWidth: 400 }}
                  >
                    {data.data.bio}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={2} marginTop={3}>
                    <IconButton
                      sx={{
                        backgroundColor: "green",
                        color: "white",
                        "&:hover": { backgroundColor: "darkgreen" },
                        width: 48,
                        height: 48,
                      }}
                    >
                      {/* <PlayArrowIcon fontSize="large" /> */}
                    </IconButton>

                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        borderColor: "white",
                        "&:hover": { borderColor: "green", color: "green" },
                      }}
                    >
                      FOLLOW +
                    </Button>
                  </Box>
                </Box>
              </Box>
              <MostPopularArtistSongs artist={username} />
            </>
          )}
        </>
      )}
    </>
  );
};
