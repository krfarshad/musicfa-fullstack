import { Router } from "express";
import authRouter from "./auth/auth-route";
import { albumsRouter } from "./albums/albums-router";
import { artistsRouter } from "./artists/artists-router";

const router: Router = Router();
router.use(authRouter);
router.use(albumsRouter);
router.use(artistsRouter);

export default router;
