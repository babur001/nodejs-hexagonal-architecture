import type { MediaResponseDto } from "@/modules/media/application/dto/media-create.response";
import type { MediaEntity } from "@/modules/media/domain/media-entity";

export interface IMediaRepository {
  persist_files: (entities: MediaEntity[]) => Promise<MediaResponseDto[]>;
  archive: (entities: MediaEntity["id"][]) => Promise<boolean>;
}
