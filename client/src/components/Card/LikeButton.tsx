import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const LikeButton = () => {
  return (
    <>
      <IconButton
        aria-label="like music"
        size="small"
        sx={{ color: "text.light", "&:hover": { color: "primary.main" } }}
      >
        <FavoriteIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default LikeButton;
