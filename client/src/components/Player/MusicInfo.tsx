import { RootState } from "@/store";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { useSelector } from "react-redux";

const MusicInfo = () => {
  const { currentMusic } = useSelector((state: RootState) => state.music);

  return (
    <>
      <Avatar
        src={currentMusic?.coverImageUrl}
        alt={currentMusic?.title}
        sx={{ width: { xs: 32, sm: 48 }, height: { xs: 32, sm: 48 } }}
      />

      <Box
        sx={{
          flex: 1,
          maxWidth: "120px",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          alt={currentMusic?.title}
        </Typography>
        <Link href={`/artists/${currentMusic?.artist?.username}`}>
          <Typography variant="body2" color="text.secondary">
            {currentMusic?.artist?.name}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default MusicInfo;
