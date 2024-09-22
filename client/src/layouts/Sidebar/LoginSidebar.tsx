import { Box, Button } from "@mui/material";
import { Login, Logout } from "iconsax-react";
export const LoginSidebar = () => {
  const loggedIn = true;
  return (
    <Box p={[2, 4]}>
      {loggedIn ? (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          startIcon={<Logout size="20" color="#fff" />}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          startIcon={<Login size="20" color="#fff" />}
        >
          Login
        </Button>
      )}
    </Box>
  );
};
