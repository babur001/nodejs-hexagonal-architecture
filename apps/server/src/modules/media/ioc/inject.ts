import { InjectionKey } from "@/core/ioc/injection-keys";
import { CreateMediaUseCase } from "@/modules/media/application/use-cases/create-media.usecase";
import { MediaRepository } from "@/modules/media/infrastructure/media.repository";
import { MediaController } from "@/modules/media/interface/media.controller";
import type { Container } from "inversify";

export const inject_media_dependencies = (container: Container) => {
  container
    .bind<MediaController>(InjectionKey.MediaController)
    .to(MediaController)
    .inSingletonScope();

  container
    .bind<CreateMediaUseCase>(InjectionKey.CreateMediaUseCase)
    .to(CreateMediaUseCase)
    .inSingletonScope();

  container
    .bind<MediaRepository>(InjectionKey.MediaRepository)
    .to(MediaRepository)
    .inSingletonScope();
};
