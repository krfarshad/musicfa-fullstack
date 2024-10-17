"use client";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ChildrenProps } from "@/types";
import { Sidebar } from "./Sidebar";
import { IconButton } from "@mui/material";
import { Header } from "./Header";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useEffect, useState, useRef } from "react";
import PLayerBlade from "@/components/Player/PLayerBlade";

interface Props extends ChildrenProps {}

export default function MUIAppLayout(props: Props) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const checkDefaultSidebar = () => {
    const savedState = localStorage.getItem("sidebarOpen");
    if (savedState) {
      const { width = 0 } = ref?.current?.getBoundingClientRect() || {};
      if (width && width < 900) {
        return false;
      }
      return JSON.parse(savedState);
    }
    return false;
  };

  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const state = checkDefaultSidebar();
    setOpen(state);
  }, []);

  const handleDrawerOpen = () => {
    const newState = !open;
    setOpen(newState);
    localStorage.setItem("sidebarOpen", JSON.stringify(newState));
  };
  const drawerWidth = open ? 240 : 0;

  return (
    <>
      <Box sx={{ display: "flex" }} ref={ref}>
        {open != null && (
          <>
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
                      marginRight: 1,
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
                pb: 20,
                minHeight: "100vh",
                backgroundColor: "background.scrimDark",
              }}
            >
              <Toolbar />
              {children}
              <PLayerBlade />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
