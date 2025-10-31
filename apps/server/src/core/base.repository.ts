import { db, type DB_or_TX } from "@/infrastructure/database";

export abstract class BaseRepository {
  protected database: DB_or_TX = db;
}
