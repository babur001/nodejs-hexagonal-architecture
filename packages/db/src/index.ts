import { drizzle } from "drizzle-orm/node-postgres";
import { p } from "./p";
import { d } from "./d";
import { timestamps } from "./timestamps";
import { cl_uuid } from "./cl_uuid";

const db = drizzle(process.env.DATABASE_URL || "");

type DB = typeof db;
type TX = Parameters<Parameters<DB["transaction"]>[0]>[0];
type DB_or_TX = DB | TX;

export { p, d, db, timestamps, cl_uuid };
export type { DB, TX, DB_or_TX };
