import { Router } from "express";
import { ArtistController } from "../../controllers/artist-controller";
import { authMiddleware } from "../../middlewares/auth-middleware";

const router: Router = Router();

router.get("/artists", ArtistController.getArtists);

router.get("/artists/:artistId", ArtistController.getArtists);

router.post("/artists/:artistId", authMiddleware, ArtistController.addArtist);

router.put("/artists", authMiddleware, ArtistController.updateArtist);

export { router as artistsRouter };
