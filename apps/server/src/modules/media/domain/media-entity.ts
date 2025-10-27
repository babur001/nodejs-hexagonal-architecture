import { BaseEntity } from "@/core/base-entity";
import type { I_media_props } from "@/modules/media/domain/media-type";

export class MediaEntity extends BaseEntity implements I_media_props {
  public static temp_folder = "uploads/temp";
  public static permanent_folder = `uploads/media`;

  /**
   * Must be in bytes
   * 1 KB = 1024 bytes, 1 MB = 1024 * 1024 bytes
   */
  readonly file_size: number;
  readonly file_temp_path: string = MediaEntity.temp_folder;
  readonly file_name: string;
  readonly mime_type: string;
  readonly file_ext: string;
  readonly width: number;
  readonly height: number;
  readonly permanent_path: string;

  constructor(data: I_media_props) {
    super({});
    Object.assign(this, data);
  }

  static create(data: I_media_props): MediaEntity {
    const generated_name = MediaEntity.generate_file_name(data.file_name); // 1627384950_image.png
    const permanent_path = `${MediaEntity.permanent_folder}/${generated_name}`; // uploads/media/1627384950_image.png
    return new MediaEntity({ ...data, file_name: generated_name, permanent_path });
  }

  static generate_file_name(original_name: string): string {
    const timestamp = Date.now();
    const sanitized = original_name.replace(/\s+/g, "_").toLowerCase();
    return `${timestamp}_${sanitized}`;
  }
}
