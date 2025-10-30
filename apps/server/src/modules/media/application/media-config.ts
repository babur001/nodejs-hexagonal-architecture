import { MediaEntity } from "@/modules/media/domain/media-entity";
import path from "node:path";

export const temp_disk_storage_path = path.resolve(
  process.cwd(),
  MediaEntity.temporary_folder
);
export const permanent_disk_storage_path = path.resolve(
  process.cwd(),
  MediaEntity.permanent_folder
);
export const allowed_filetypes = /jpeg|jpg|png|gif|webp/;
export const MAX_UPLOAD_SIZE = parseInt(process.env.MAX_FILE_UPLOAD_SIZE!);
