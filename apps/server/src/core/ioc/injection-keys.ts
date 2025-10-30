export class InjectionKey {
  static readonly Logger = Symbol.for("Logger");
  static readonly CreateMediaUseCase = Symbol.for("CreateMediaUseCase");
  static readonly MediaController = Symbol.for("MediaController");
  static readonly MediaRepository = Symbol.for("MediaRepository");
}
