import { useAppDispatch } from "@/hooks";
import { likeMusicAsync } from "@/store/slices/musicSlice";
import { Favorite } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

type Props = {
  id: number;
};
export const LikeMusic = (props: Props) => {
  const { id } = props;

  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(likeMusicAsync(id));
  };

  return (
    <IconButton color="inherit" onClick={handleLike}>
      <Favorite />
    </IconButton>
  );
};
