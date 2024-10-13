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
        my: 1,
        py: 4,
        px: 2,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          component="h6"
          mb="2"
          sx={{ color: "text.light", mb: 2 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};
