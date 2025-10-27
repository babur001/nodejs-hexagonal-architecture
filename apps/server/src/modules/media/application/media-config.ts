import path from "node:path";

export const temp_disk_storage_path = path.resolve(process.cwd(), "uploads/temp");
export const final_disk_storage_path = path.resolve(process.cwd(), "uploads/turbo");
export const allowed_filetypes = /jpeg|jpg|png|gif|webp/;
export const MAX_UPLOAD_SIZE = parseInt(process.env.MAX_FILE_UPLOAD_SIZE!);
