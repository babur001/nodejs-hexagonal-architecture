import { v7 } from "uuid";

export abstract class BaseEntity {
  readonly id: string;
  readonly created_at: Date;
  updated_at: Date;

  constructor(data: Partial<BaseEntity>) {
    this.id = data.id ?? v7();
    this.created_at = data.created_at ?? new Date();
    this.updated_at = data.updated_at ?? new Date();
  }
}
