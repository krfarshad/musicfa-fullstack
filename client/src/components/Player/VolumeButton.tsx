import { memo } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUp from "@mui/icons-material/VolumeUp";

const VolumeButton = () => {
  return (
    <IconButton color="inherit">
      <VolumeUp />
    </IconButton>
  );
};

export default memo(VolumeButton);
