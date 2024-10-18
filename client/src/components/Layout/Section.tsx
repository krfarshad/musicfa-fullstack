import { ChildrenProps } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props extends ChildrenProps {
  title?: string;
  variant?: string;
}
export const Section = (props: Props) => {
  const { children, title, variant = "h6" } = props;
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
          variant={variant as any}
          component={variant ? variant : ("h6" as any)}
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
