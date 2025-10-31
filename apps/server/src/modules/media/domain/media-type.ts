export interface MediaCreateProps {
  readonly file_name: string;
  readonly file_size: number;
  readonly file_original_name: string;
  readonly mime_type: string;
  readonly temporary_path: string;
  readonly permanent_path: string;
}
