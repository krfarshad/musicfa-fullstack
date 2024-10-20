import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../../utils/registerValidation";
import { AuthController } from "../../controllers/auth-controller";
import passport from "passport";

const router = Router();

router.post(
  "/api/auth/register",
  checkSchema(createUserValidationSchema),
  AuthController.register
);

router.post("/auth/login", AuthController.login);

router.get("/auth/status", AuthController.status);

router.post("/auth/logout", AuthController.logout);

router.get("/auth/discord", passport.authenticate("discord"));

export default router;
