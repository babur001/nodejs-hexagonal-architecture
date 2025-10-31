import { InjectionKey } from "@/core/ioc/injection-keys";
import { Logger } from "@/infrastructure/logger";
import { Container } from "inversify";

const container = new Container();

container.bind<Logger>(InjectionKey.Logger).to(Logger).inSingletonScope();

export { container };
