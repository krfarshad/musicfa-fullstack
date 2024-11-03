import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth-middleware";
import { AlbumController } from "../../controllers/album-controller";
import { CSRFMiddleware } from "../../middlewares/csrf-middleware";

const router: Router = Router();

router.get("/albums", AlbumController.getAlbums);

router.get("/albums/:albumId", AlbumController.getAlbum);

router.post(
  "/albums/:albumId",
  [authMiddleware, CSRFMiddleware],
  AlbumController.addAlbum
);

router.put(
  "/albums",
  [authMiddleware, CSRFMiddleware],
  AlbumController.updateAlbum
);

router.delete(
  "/albums",
  [authMiddleware, CSRFMiddleware],
  AlbumController.removeAlbum
);

export { router as albumsRouter };
