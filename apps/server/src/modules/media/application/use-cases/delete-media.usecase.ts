import { InjectionKey } from "@/core/ioc/injection-keys";
import type { TMediaDeleteDto } from "@/modules/media/application/dto/media-delete.dto";
import { inject, injectable } from "inversify";
import type { MediaRepository } from "@/modules/media/infrastructure/media.repository";
import type { IMediaDeleteResponse } from "@/modules/media/application/dto/media-delete.response";

@injectable()
export class DeleteMediaUseCase {
  constructor(@inject(InjectionKey.MediaRepository) private repo: MediaRepository) {}

  public async execute(ids: TMediaDeleteDto): Promise<IMediaDeleteResponse> {
    const archived_files = await this.repo.archive(ids);

    return archived_files;
  }
}
