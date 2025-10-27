import { BaseResponseDto } from "@/core/base.response-dto";

export class MediaReponseDto extends BaseResponseDto {
  url: string;
  file_name: string;
  mime_type: string;
  file_ext: string;
  file_size: number;
  width: number;
  height: number;
  folder_id: string | null;
}
