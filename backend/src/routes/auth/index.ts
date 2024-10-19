import { Router } from "express";
import { checkSchema } from "express-validator";
import { createUserValidationSchema } from "../../utils/registerValidation";
import { AuthController } from "../../controllers/auth";
import passport from "passport";

const router = Router();

declare module "express-session" {
  interface SessionData {
    user: {
      username: string;
      password: string;
    };
  }
}

// login
router.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
  res.sendStatus(200).send({
    data: null,
    status: 200,
    msg: "successful login",
  });
});

// logout
router.post("/api/auth/logout", (req, res) => {
  if (!req.user) res.sendStatus(401);
  req.logout((err) => {
    if (err) res.sendStatus(400);
    res.send(200);
  });
});

router.get("/api/auth/status", (req, res) => {
  const user = req.session.user;
  if (!user)
    res.status(200).send({ data: null, status: 401, msg: "Not logged in" });
  res.status(200).send({ data: user, status: 200, msg: "logged in" });
});

// discord
router.get("/api/auth/discord", passport.authenticate("discord"));

// register
router.post(
  "/api/auth/register",
  checkSchema(createUserValidationSchema),
  async (req: any, res: any) => {
    await AuthController.register(req, res);
  }
);
export default router;
