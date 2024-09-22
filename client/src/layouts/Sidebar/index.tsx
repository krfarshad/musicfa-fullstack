import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menuItems } from "./menuItems";
import { Logo } from "../Logo";
import { LoginSidebar } from "./LoginSidebar";
import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";

export const Sidebar = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        height: "100%",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Box p={2} textAlign="center">
        <Logo />
      </Box>
      <Box sx={{ flex: "1 1 0%" }}>
        {menuItems.map((menu) => (
          <>
            <Typography variant="body1" component="h5" px={2} pt={4}>
              {menu.title}
            </Typography>
            <List key={menu.title}>
              {menu.items.map((item) => (
                <ListItem disablePadding key={`${menu.title}_${item.title}`}>
                  <ListItemButton href={item.link}>
                    <ListItemIcon sx={{ width: "28px" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      color="light"
                      sx={{ fontSize: "14px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </>
        ))}
      </Box>
      <LoginSidebar />
    </Stack>
  );
};
