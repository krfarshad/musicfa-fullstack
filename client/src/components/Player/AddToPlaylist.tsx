import PlaylistAdd from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { memo } from "react";

const AddToPlaylist = () => {
  return (
    <IconButton color="inherit">
      <PlaylistAdd />
    </IconButton>
  );
};

export default memo(AddToPlaylist);
