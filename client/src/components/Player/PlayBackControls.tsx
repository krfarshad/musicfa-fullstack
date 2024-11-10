import { SkipNext, SkipPrevious } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { PlayerButtons } from "./PlayerButtons";

export const PlayBackControls = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: { xs: 0, sm: 2 },
      }}
    >
      <IconButton color="inherit">
        <SkipPrevious fontSize="large" />
      </IconButton>
      <PlayerButtons />
      <IconButton color="inherit">
        <SkipNext fontSize="large" />
      </IconButton>
    </Box>
  );
};
