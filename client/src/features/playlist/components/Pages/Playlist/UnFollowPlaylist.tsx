"use client";
import { PlaylistProp } from "@/features/playlist/types";
import Button from "@mui/material/Button";

interface Props extends Pick<PlaylistProp, "id"> {}

const UnFollowPlaylist = (props: Props) => {
  const { id } = props;
  return (
    <Button type="button" variant="outlined" size="medium" color="primary">
      UnFollow
    </Button>
  );
};

export default UnFollowPlaylist;
