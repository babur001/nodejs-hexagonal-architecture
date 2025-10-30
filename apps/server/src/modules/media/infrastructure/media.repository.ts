import { BaseRepository } from "@/core/base.repository";
import { permanent_disk_storage_path } from "@/modules/media/application/media-config";
import { MediaEntity } from "@/modules/media/domain/media-entity";
import type { IMediaRepository } from "@/modules/media/domain/media.service";
import { injectable } from "inversify";
import path from "node:path";
import fs from "node:fs/promises";
import { media } from "@/modules/media/infrastructure/media.model";
import { ensure_decimal } from "@/lib/decimal";
import { d } from "@/core/db";
import type { MediaResponseDto } from "@/modules/media/application/dto/media-create.response";

@injectable()
export class MediaRepository extends BaseRepository implements IMediaRepository {
  private _table = media;

  public async persist_files(media_entities: MediaEntity[]) {
    const saved_media_entities = await this.save_to_disk(media_entities);
    const saved_to_db = await this.create(saved_media_entities);

    return saved_to_db;
  }

  public async archive(ids: MediaEntity["id"][]) {
    const archived_medias = await this.database
      .update(this._table)
      .set({
        is_active: false,
      })
      .where(d.eq(this._table.id, d.inArray(this._table, ids)))
      .returning({ id: this._table.id });

    if (archived_medias.length > 0) return true;

    return false;
  }

  private async save_to_disk(files: MediaEntity[]) {
    return Promise.all(
      files.map(async (file) => {
        console.log(file);

        const uniq_file_name = MediaEntity.generate_uniq_file_name(
          file.file_name,
          file.file_ext
        );
        const from = file.temporary_path;
        const to = path.posix.join(permanent_disk_storage_path, uniq_file_name);

        await fs.copyFile(from, to);
        await fs.unlink(from);

        return MediaEntity.create({
          ...file,
          file_original_name: `${file.file_name}${file.file_ext}`,
          temporary_path: from,
          permanent_path: MediaEntity.url(uniq_file_name),
        });
      })
    );
  }

  private async create(entities: MediaEntity[]): Promise<MediaResponseDto[]> {
    const new_medias = await this.database
      .insert(this._table)
      .values(
        entities.map((e) => ({
          file_url: e.permanent_path,
          file_name: e.file_name,
          file_size: ensure_decimal(e.file_size).toString(),
          mime_type: e.mime_type,
        }))
      )
      .returning();

    return new_medias.map((nm) => {
      return {
        id: nm.id,
        url: nm.file_url,
        file_ext: nm.mime_type,
        file_name: nm.file_name,
        file_size: nm.file_size,
        folder_id: null,
        mime_type: nm.mime_type,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
  }
}
