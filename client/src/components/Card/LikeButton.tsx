import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

type Props = {};
const LikeButton = (props: Props) => {
  const {} = props;
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
