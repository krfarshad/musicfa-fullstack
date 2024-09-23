"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ChildrenProps } from "@/types";
import { Sidebar } from "./Sidebar";
import { IconButton } from "@mui/material";
import { Header } from "./Header";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useLayoutEffect, useState } from "react";
interface Props extends ChildrenProps {}
export default function MUIAppLayout(props: Props) {
  const { children } = props;

  const [open, setOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("sidebarOpen");
      if (savedState) {
        setOpen(JSON.parse(savedState));
      }
    }
  }, []);

  const handleDrawerOpen = () => {
    const newState = !open;
    setOpen(newState);
    localStorage.setItem("sidebarOpen", JSON.stringify(newState));
  };
  const drawerWidth = open ? 240 : 0;

  console.log("open", open);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          transition: "all .3s",
          ml: `${drawerWidth}px`,
          backgroundColor: "background.dark",
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
                color: "#fff",
                transition: "all .3s",
              },
            ]}
          >
            <MenuOpenOutlinedIcon fontSize="small" color="inherit" />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "background.dark",
            boxSizing: "border-box",
            transition: "all .3s",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          backgroundColor: "background.scrimDark",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
