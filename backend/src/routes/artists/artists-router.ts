import { Router } from "express";
import { ArtistController } from "../../controllers/artist-controller";
import { authMiddleware } from "../../middlewares/auth-middleware";
import { CSRFMiddleware } from "../../middlewares/csrf-middleware";
import { upload } from "../../middlewares/upload-middleware";
import { artistSchemaValidator } from "../../models/schemas/artist-schema";
import { checkSchemaValidator } from "../../middlewares/checkSchema-middleware";
import { checkSchema } from "express-validator";

const router: Router = Router();

router.get("/artists", ArtistController.getArtists);

router.post(
  "/artists",
  // checkSchema(artistSchemaValidator),
  [upload.single("artistAvatar")],
  ArtistController.addArtist
);

router.get("/artists/:artistId", ArtistController.getArtists);

router.put(
  "/artists",
  [authMiddleware, CSRFMiddleware],
  ArtistController.updateArtist
);

export { router as artistsRouter };
