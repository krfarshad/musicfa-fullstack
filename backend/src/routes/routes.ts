const routes = require("express").Router();
import albumsRouter from "./albums/index";
import authRouter from "./auth/index";

routes.use(albumsRouter);
routes.use(authRouter);

// routes.get("/", (req, res) => {
//   res.status(200).json({ message: "Connected!" });
// });

export default routes;
