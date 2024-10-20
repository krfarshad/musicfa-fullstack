import { Router } from "express";
import albumsRouter from "./albums/index";
import authRouter from "./auth/auth-route";

const router: Router = Router();
router.use(authRouter);
router.use(albumsRouter);

export default router;
