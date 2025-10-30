import { db, type DB_or_TX } from "@imagels/db";

export abstract class BaseRepository {
  protected database: DB_or_TX = db;
}
