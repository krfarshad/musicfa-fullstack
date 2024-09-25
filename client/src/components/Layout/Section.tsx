import { ChildrenProps } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props extends ChildrenProps {
  title?: string;
}
export const Section = (props: Props) => {
  const { children, title } = props;
  return (
    <Box
      sx={{
        mt: 8,
        py: 4,
        backgroundColor: "background.light",
      }}
    >
      {title && (
        <Typography
          variant="h5"
          component="h2"
          mb="2"
          sx={{ color: "text.light" }}
        >
          TopArtists
        </Typography>
      )}
      {children}
    </Box>
  );
};
