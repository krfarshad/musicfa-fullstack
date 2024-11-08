import { Router } from "express";
import { MusicController } from "../../controllers/music-controller";
import { authMiddleware } from "../../middlewares/auth-middleware";
import { CSRFMiddleware } from "../../middlewares/csrf-middleware";
import { upload } from "../../middlewares/upload-middleware";

const router: Router = Router();

router.get("/musics", MusicController.getMusics);

router.get("/musics/:musicId", MusicController.getMusics);

router.post(
  "/musics",
  upload.fields([
    { name: "music", maxCount: 1 },
    { name: "musicCover", maxCount: 1 },
  ]),
  MusicController.addMusic
);

router.put(
  "/musics",
  [authMiddleware, CSRFMiddleware],
  MusicController.updateMusic
);

export { router as musicsRouter };
