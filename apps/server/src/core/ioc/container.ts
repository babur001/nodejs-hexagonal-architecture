import { InjectionKey } from "@/core/ioc/injection-keys";
import { Logger } from "@/core/logger";
import { CreateMediaUseCase } from "@/modules/media/application/use-cases/create-media";
import { Container } from "inversify";

const container = new Container();

container.bind<Logger>(InjectionKey.Logger).to(Logger).inSingletonScope();
container
  .bind<CreateMediaUseCase>(InjectionKey.CreateMediaUseCase)
  .to(CreateMediaUseCase)
  .inSingletonScope();

export { container };
