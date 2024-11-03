import { Router } from "express";
import { PlaylistController } from "../../controllers/playlist-controller";
import { authMiddleware } from "../../middlewares/auth-middleware";
import { CSRFMiddleware } from "../../middlewares/csrf-middleware";

const router: Router = Router();

router.get("/playlists", PlaylistController.getPlaylists);

router.get("/playlists/:playlistId", PlaylistController.getPlaylists);

router.post(
  "/playlists/:playlistId",
  [authMiddleware, CSRFMiddleware],
  PlaylistController.addPlaylist
);

router.put(
  "/playlists",
  [authMiddleware, CSRFMiddleware],
  PlaylistController.updatePlaylist
);

export { router as playlistsRouter };
