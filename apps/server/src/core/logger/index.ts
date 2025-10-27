import { injectable } from "inversify";
import pino from "pino";

@injectable()
export class Logger {
  info(message: string): void {
    pino({}).info(`INFO: ${message}`);
  }
  success(message: string): void {
    pino({}).debug(`SUCCESS: ${message}`);
  }
  error(message: string): void {
    pino({}).warn(`ERROR: ${message}}`);
  }
}
