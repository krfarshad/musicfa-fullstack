import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = req.body.type || "";
    cb(null, path.resolve("uploads", folder));
  },
  filename: (req, file, cb) => {
    cb(null, `image-mf-${Date.now()}.jpg`);
  },
});

export const upload = multer({ storage });
