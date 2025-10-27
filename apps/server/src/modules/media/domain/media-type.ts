export interface I_media_props {
  readonly file_temp_path: string;
  readonly file_name: string;
  readonly file_size: number;
  readonly mime_type: string;
  readonly file_ext: string;
  readonly width: number;
  readonly height: number;
  readonly permanent_path: string;
}
