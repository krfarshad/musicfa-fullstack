import { NotificationBing } from "iconsax-react";
import { Badge, IconButton } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";
import { Box, Stack } from "@mui/material";
import SearchField from "./SearchField";

export const Header = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ py: 2 }}>
        <SearchField />
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton size="small" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationBing size="24" color="#eee" variant="Broken" />
          </Badge>
        </IconButton>
        <HeaderAvatar />
      </Stack>
    </Stack>
  );
};
