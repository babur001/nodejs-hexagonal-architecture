export interface MediaCreateProps {
  readonly file_name: string;
  readonly file_size: number;
  readonly mime_type: string;
  readonly temporary_path: string;
  readonly permanent_path: string;
}

export interface I_media_props {
  readonly file_temp_path: string;
  readonly file_name: string;
  readonly file_size: number;
  readonly mime_type: string;
  readonly file_ext: string;
  readonly permanent_path: string;
}
