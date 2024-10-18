"use client";

import { PlaylistProp } from "@/features/playlist/types";
import Button from "@mui/material/Button";

interface Props extends Pick<PlaylistProp, "id"> {}

const FollowPlaylist = (props: Props) => {
  const { id } = props;
  return (
    <Button type="button" variant="contained" size="medium" color="primary">
      Follow
    </Button>
  );
};

export default FollowPlaylist;
