import { InjectionKey } from "@/core/ioc/injection-keys";
import type { Logger } from "@/core/logger";
import type { MediaCreateDto } from "@/modules/media/application/dto/media.create.dto";
import { inject, injectable } from "inversify";

@injectable()
export class CreateMediaUseCase {
  constructor(
    @inject(InjectionKey.Logger) private logger: Logger,
    @inject(InjectionKey.MediaRepository) private repo: MediaRepository
  ) {}

  public async execute(data: MediaCreateDto) {
    this.logger.info(`Creating media files ${data.length}`);

    this.repo.insert(data);

    return [];
  }
}
