import { InjectionKey } from "@/core/ioc/injection-keys";
import type { MediaCreateDto } from "@/modules/media/application/dto/media-create.dto";
import { inject, injectable } from "inversify";
import type { MediaResponseDto } from "@/modules/media/application/dto/media-create.response";
import type { MediaRepository } from "@/modules/media/infrastructure/media.repository";
import { MediaEntity } from "@/modules/media/domain/media.entity";

@injectable()
export class CreateMediaUseCase {
  constructor(@inject(InjectionKey.MediaRepository) private repo: MediaRepository) {}

  public async execute(files: MediaCreateDto): Promise<MediaResponseDto[]> {
    const media_entities = files.map((f) => MediaEntity.create_from_multer(f));
    const uploaded_files = await this.repo.persist_files(media_entities);

    return uploaded_files;
  }
}
