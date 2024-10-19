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
router.post("/api/auth/login", (req, res, next) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) {
      return res.status(500).send({
        data: null,
        status: 500,
        msg: err.message,
      });
    }

    if (!user) {
      return res.status(401).send({
        data: null,
        status: 401,
        msg: info.message || "Authentication failed",
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).send({
          data: null,
          status: 500,
          msg: err.message,
        });
      }

      return res.status(200).send({
        data: {
          username: user.username,
          role: user.role,
        },
        status: 200,
        msg: "Successful login",
      });
    });
  })(req, res, next);
});

// logout
router.post("/api/auth/logout", (req, res) => {
  if (!req.user)
    res.status(401).send({
      data: null,
      status: 401,
      msg: "Invalid data",
    });
  req.logout((err) => {
    if (err) res.sendStatus(400);
    res.status(200).send({
      data: null,
      status: 200,
      msg: "Successful logout",
    });
  });
});

// check status
router.get("/api/auth/status", (req, res) => {
  const user: any = req.user;
  if (!user) {
    res.status(401).send({ data: null, status: 401, msg: "Not logged in" });
  }
  res.status(200).send({
    data: {
      username: user?.username as any,
    },
    status: 200,
    msg: "User is logged in",
  });
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
