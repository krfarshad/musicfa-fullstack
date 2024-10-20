import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user";
import { mockData } from "../utils/mockData";
import { hashPassword } from "../utils/passwordUtils";

export const getUserByIdHandler = (request: any, response: any) => {
  const { findUserIndex } = request;
  const findUser = mockData[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
};

export const createUserHandler = async (request: any, response: any) => {
  const result = validationResult(request);
  if (!result.isEmpty()) return response.status(400).send(result.array());
  const data = matchedData(request);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  try {
    const savedUser = await newUser.save();
    return response.status(201).send(savedUser);
  } catch (err) {
    return response.sendStatus(400);
  }
};
