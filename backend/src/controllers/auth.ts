import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user";
import { hashPassword } from "../utils/passwordUtils";

class AuthHandler {
  public async register(req: any, res: any) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({
        data: null,
        status: 400,
        msg: result.array(),
      });
    }
    let data = matchedData(req);
    const findUser = await User.findOne({ username: data.username });
    if (findUser) {
      return res.status(400).send({
        data: null,
        status: 400,
        msg: "This username has used before!",
      });
    }
    data.password = hashPassword(data.password);
    data.email = req.body.email;
    const newUser = new User(data);
    try {
      const savedUser = await newUser.save();
      return res.status(201).send({
        data: data,
        status: 201,
        msg: "register successfully",
      });
    } catch (err) {
      return res.status(500).send({
        data: null,
        status: 500,
        msg: err,
      });
    }
  }
}

export const AuthController = new AuthHandler();
