export class BaseDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: BaseDto) {
    this.createdAt = partial.createdAt || new Date();
    this.updatedAt = partial.updatedAt || new Date();
    this.id = partial.id;
  }
}
