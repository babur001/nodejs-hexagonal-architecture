import { env } from "@/lib/env";
import {
  allowed_filetypes,
  temp_disk_storage_path,
} from "@/modules/media/application/media-config";
import multer from "multer";
import path from "node:path";

const check_allowed_file_type = (
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
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
  limits: { fileSize: env.MAX_FILE_SIZE },
  fileFilter: function (req, file, cb) {
    if (!file) throw new Error(`No file was provided`);
    return check_allowed_file_type(file, cb);
  },
});
