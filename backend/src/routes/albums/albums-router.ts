import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth-middleware";
import { AlbumController } from "../../controllers/album-controller";

const router: Router = Router();

router.get("/albums", AlbumController.getAlbums);

router.get("/albums/:albumId", AlbumController.getAlbum);

router.post("/albums/:albumId", authMiddleware, AlbumController.addAlbum);

router.put("/albums", authMiddleware, AlbumController.updateAlbum);

router.delete("/albums", authMiddleware, AlbumController.removeAlbum);

export { router as albumsRouter };
