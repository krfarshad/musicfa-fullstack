import { matchedData, validationResult } from "express-validator";
import { comparePassword, hashPassword } from "../utils/passwordUtils";
import { User } from "../database/models/user-model";
import { NextFunction, Request, response, Response } from "express";
import passport from "passport";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { config } from "../config/global.config";

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

  // @desc login user
  // @route POST /api/v1/auth/login
  // @access public
  public login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { username, password } = req.body;

      const user: any = await User.findOne({ username });

      if (!user) {
        res.status(401).json({
          status: 401,
          msg: "Incorrect username or password",
        });
      }

      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        res.status(401).json({
          status: 401,
          msg: "Incorrect username or password",
        });
      }

      const accessToken = jwt.sign({ id: user.id }, config.jwt_secret, {
        expiresIn: "8h",
      });

      const refreshToken = jwt.sign(
        { id: user.id },
        config.refresh_token_secret,
        {
          expiresIn: "4d",
        }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(200).json({
        data: {
          username: user.username,
          role: user.role,
          token: accessToken,
        },
        status: 200,
        msg: "Successful login",
      });
    }
  );
  // @desc refresh token
  // @route POST /api/v1/auth/refresh-token
  // @access public
  public refreshToken = asyncHandler(async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    const { csrfToken } = req.body;

    if (!csrfToken || !csrfToken.verify(process.env.CSRF_SECRET, csrfToken)) {
      res.status(403).json({ message: "Invalid CSRF token" });
    }
    if (!refreshToken) {
      res.status(401).json({ message: "No refresh token" });
    }

    jwt.verify(
      refreshToken,
      config.refresh_token_secret,
      (err: any, user: any) => {
        if (err) res.status(403).json({ message: "Invalid refresh token" });

        const newAccessToken = jwt.sign({ id: user.id }, config.jwt_secret, {
          expiresIn: "15m",
        });

        res.json({ accessToken: newAccessToken });
      }
    );
  });
}

export const AuthController = new AuthHandler();
