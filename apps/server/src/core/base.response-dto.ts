export class BaseResponseDto {
  readonly id: string;
  readonly created_at: Date;
  readonly updated_at: Date;

  constructor({ id, created_at, updated_at }: BaseResponseDto) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
