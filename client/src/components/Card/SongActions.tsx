import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LikeButton from "./LikeButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import PersonIcon from "@mui/icons-material/Person";

const SongActions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: "20ch",
            },
          },
        }}
      >
        {/* play */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlayArrowIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap fontSize="small">
            Play
          </Typography>
        </MenuItem>
        {/* like */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LikeButton />
          </ListItemIcon>
          <Typography variant="inherit" noWrap fontSize="small">
            Like
          </Typography>
        </MenuItem>
        {/* add to playlist */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <QueueMusicIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap fontSize="small">
            Add to playlist
          </Typography>
        </MenuItem>
        {/* share */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShareIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap fontSize="small">
            Share
          </Typography>
        </MenuItem>
        {/* singer */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap fontSize="small">
            Go to artist page
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SongActions;
