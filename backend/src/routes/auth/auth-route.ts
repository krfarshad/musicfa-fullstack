import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../../utils/registerValidation";
import { AuthController } from "../../controllers/auth-controller";
import passport from "passport";
import { authRateLimiter } from "../../middlewares/rate-limit-middleware";
import { CSRFMiddleware } from "../../middlewares/csrf-middleware";

const router = Router();

router.post(
  "/auth/register",
  checkSchema(createUserValidationSchema),
  [authRateLimiter, CSRFMiddleware],
  AuthController.register
);

router.post(
  "/auth/login",
  [authRateLimiter, CSRFMiddleware],
  AuthController.login
);

router.get("/auth/status", AuthController.status);

router.post("/auth/logout", AuthController.logout);

router.get("/auth/discord", passport.authenticate("discord"));

router.get("/auth/refresh-token", AuthController.refreshToken);

export default router;
