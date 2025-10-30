import { BaseResponseDto } from "@/core/base.response-dto";

export interface MediaResponseDto extends BaseResponseDto {
  url: string;
  file_name: string;
  mime_type: string;
  file_ext: string;
  file_size: number;
  folder_id: string | null;
}
