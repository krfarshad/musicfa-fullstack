import { Router } from "express";
import authRouter from "./auth/auth-route";
import { albumsRouter } from "./albums/albums-router";
import { artistsRouter } from "./artists/artists-router";
import { playlistsRouter } from "./playlists/playlist-route";
import { musicsRouter } from "./musics/music-router";

const router: Router = Router();
router.use(authRouter);
router.use(albumsRouter);
router.use(artistsRouter);
router.use(playlistsRouter);
router.use(musicsRouter);

export default router;
