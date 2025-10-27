import { BaseEntity } from "@/core/base-entity";
import type { I_folder_type } from "@/core/entity/folder-type";

export class FolderEntity extends BaseEntity implements I_folder_type {
  name: string;
  parentId: string | null;

  constructor(data: I_folder_type) {
    super({});
    Object.assign(this, data);
  }
}
