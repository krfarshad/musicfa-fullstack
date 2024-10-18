import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { menuItems } from "./menuItems";
import { Logo } from "../Logo";
import { LoginSidebar } from "./LoginSidebar";
import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

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
            <Typography
              variant="body1"
              component="h5"
              sx={{ fontWeight: "semibold" }}
              px={2}
              pt={4}
            >
              {menu.title}
            </Typography>
            <List key={`menu_head_${menu.title}}`}>
              {menu.items.map((item) => (
                <ListItem
                  disablePadding
                  key={`child_${menu.title}_${item.title}`}
                >
                  <Link
                    href={item.link}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ width: "28px" }}>
                        {item.icon}
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: "13px!important" }}
                        color="light"
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  </Link>
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
