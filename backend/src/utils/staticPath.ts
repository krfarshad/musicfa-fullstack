import { Request } from "express";

export const staticPath = (
  req: Request,
  type: "music" | "cover" | "artistAvatar",
  fileName: string
) => {
  const baseUrl = req.protocol + "://" + req.get("host") + "/uploads/";

  switch (type) {
    case "music":
      return baseUrl + "musics/" + fileName;
    case "cover":
      return baseUrl + "covers/" + fileName;
    case "artistAvatar":
      return baseUrl + "artists/" + fileName;
  }
};
