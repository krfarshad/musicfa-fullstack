import { Router } from "express";

export const mockUsers = [
  { id: 1, username: "farshad", password: "123456" },
  { id: 1, username: "ali", password: "123456" },
];
const router = Router();

declare module "express-session" {
  interface SessionData {
    user: (typeof mockUsers)[0]; // Make it optional
  }
}

router.post("/api/auth", (req, res) => {
  const {
    body: { username, password },
  } = req;
  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser)
    res.status(401).send({
      data: null,
      status: 401,
      msg: "Bad request!",
    });
  if (findUser && findUser.password !== password)
    res.status(401).send({
      data: null,
      status: 401,
      msg: "Bad request!",
    });

  if (findUser) req.session.user = findUser as any;
  res.status(200).send({
    data: findUser,
    status: 200,
    msg: "Logged in successfully",
  });
});

router.get("/api/auth/status", (req, res) => {
  const user = req.session.user;
  if (!user)
    res.status(200).send({ data: null, status: 401, msg: "Not logged in" });
  res.status(200).send({ data: user, status: 200, msg: "logged in" });
});

router.get("/api/auth/data", (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.status(403).send({
      data: null,
      status: 403,
      msg: "This route is protected",
    });

    res.status(200).send({
      data: mockUsers,
      status: 200,
      msg: "success",
    });
  }
});

export default router;
