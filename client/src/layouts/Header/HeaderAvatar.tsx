"use client";
import avatar from "@/assets/images/avatar2.jpg";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const avatarMenu = [{ href: "", label: "Home" }];
const HeaderAvatar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="username" src={avatar.src} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-avatar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {avatarMenu.map((item) => (
          <MenuItem key={item.label} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HeaderAvatar;
