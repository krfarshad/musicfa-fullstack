import { Box, Card, Typography } from "@mui/material";
import avatar from "@/assets/images/avatar2.jpg";
import Image from "next/image";
export const SingerCard = () => {
  return (
    <Card variant="outlined" sx={{ width: 150 }}>
      <Box>
        <Image
          width={150}
          height={150}
          src={avatar.src}
          alt="image"
          objectFit="cover"
          priority={false}
          objectPosition="center"
        />
      </Box>
      <Box p={1}>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Taylor Swift
        </Typography>
      </Box>
    </Card>
  );
};
