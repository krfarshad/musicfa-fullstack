import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/passwordUtils";
import { User } from "../database/models/user-model";
import { NextFunction, Request, Response } from "express";
import passport from "passport";
import asyncHandler from "express-async-handler";
class AuthHandler {
  // @desc Register user
  // @route POST /api/v1/auth/user
  // @access public
  public register = asyncHandler(async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).send({
        data: null,
        status: 400,
        msg: result.array(),
      });
    }
    let data = matchedData(req);
    const findUser = await User.findOne({ username: data.username });
    if (findUser) {
      res.status(400).send({
        data: null,
        status: 400,
        msg: "This username has used before!",
      });
    }
    data.password = hashPassword(data.password);
    data.email = req.body.email;
    const newUser = new User(data);
    const savedUser = await newUser.save();
    res.status(201).send({
      data: data,
      status: 201,
      msg: "register successfully",
    });
  });

  // @desc Logout user
  // @route POST /api/v1/auth/logout
  // @access public
  public logout = asyncHandler(async (req: Request, res: Response) => {
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

  // @desc Login status user
  // @route GET /api/v1/auth/status
  // @access public
  public status = asyncHandler(async (req: Request, res: Response) => {
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
  public login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate("local", (err: any, user: any, info: any) => {
        if (err) {
          res.status(401);
          throw new Error(err);
        }

        if (!user) {
          res.status(404);
          throw new Error("Wrong username or password!");
        }

        req.logIn(user, (err) => {
          if (err) {
            res.status(500);
            throw new Error(err);
          }

          res.status(200).send({
            data: {
              username: user.username,
              role: user.role,
            },
            status: 200,
            msg: "Successful login",
          });
        });
      });
    }
  );
}

export const AuthController = new AuthHandler();
