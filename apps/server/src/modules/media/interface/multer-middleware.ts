import {
  allowed_filetypes,
  MAX_UPLOAD_SIZE,
  temp_disk_storage_path,
} from "@/modules/media/application/media-config";
import multer from "multer";
import path from "node:path";

export const image_only = (file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const extname = allowed_filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowed_filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error(`Error: Images only! Supported image types: ${allowed_filetypes}`));
  }
};

const storage = multer.diskStorage({
  destination: temp_disk_storage_path,
});

export const multer_middleware = multer({
  storage,
  limits: { fileSize: MAX_UPLOAD_SIZE },
  fileFilter: function (req, file, cb) {
    return image_only(file, cb);
  },
});
