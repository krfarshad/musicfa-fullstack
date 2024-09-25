import { Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
const HomeTopBanner = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.light",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", color: "#fff" }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Musicfa!
        </Typography>

        <Typography variant="h6" gutterBottom>
          Where Innovation Meets Excellence
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          onClick={() => alert("Button Clicked")}
        >
          Join us
        </Button>
      </Grid>
    </Box>
  );
};

export default HomeTopBanner;
