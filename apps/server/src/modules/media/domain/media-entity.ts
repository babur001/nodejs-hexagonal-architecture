import { BaseEntity } from "@/core/base-entity";
import type { MediaCreateProps } from "@/modules/media/domain/media-type";
import path from "node:path";

export class MediaEntity extends BaseEntity {
  public static temporary_folder = `uploads/temp`;
  public static permanent_folder = `uploads/media`;

  readonly file_name: string;
  readonly file_ext: string;
  /** Must be in bytes: 1 KB = 1024 bytes, 1 MB = 1024 * 1024 bytes  */
  readonly file_size: number;
  readonly mime_type: string;

  /** @description /uploads/media/panda.jpeg */
  protected readonly _permanent_path: string;

  /** @description /uploads/temp/123456543212345 */
  protected readonly _temporary_path: string;

  constructor(data: MediaCreateProps) {
    super();
    this._permanent_path = data.permanent_path;
    this._temporary_path = data.temporary_path;
    this.file_name = data.file_name;
    this.file_ext = path.extname(data.file_original_name);
    this.file_size = data.file_size;
    this.mime_type = data.mime_type;
  }

  get permanent_path(): string {
    return this._permanent_path;
  }

  get temporary_path(): string {
    return this._temporary_path;
  }

  static create(data: MediaCreateProps): MediaEntity {
    return new MediaEntity({
      ...data,
    });
  }

  static create_from_multer(f: Express.Multer.File): MediaEntity {
    return this.create({
      file_name: f.filename,
      file_size: f.size,
      mime_type: f.mimetype,
      file_original_name: f.originalname,
      permanent_path: "",
      temporary_path: f.path,
    });
  }

  static url(filename: string) {
    return `${MediaEntity.permanent_folder}/${filename}`;
  }

  static generate_uniq_file_name(original_name: string, ext: string): string {
    const timestamp = Date.now();
    const sanitized = original_name.replace(/\s+/g, "_").toLowerCase();

    console.log(`${timestamp}_${sanitized}${ext}`);

    return `${timestamp}_${sanitized}${ext}`;
  }
}
