import { drizzle } from "drizzle-orm/node-postgres";
import { p } from "./p";
import { d } from "./d";
import { timestamps } from "./timestamps";
import { cl_uuid } from "./cl_uuid";
import { schema } from "@/core/db/schema";
import { env } from "@/lib/env";

export const db = drizzle(env.DATABASE_URL, {
  schema: schema,
});

type DB = typeof db;
type TX = Parameters<Parameters<DB["transaction"]>[0]>[0];
type DB_or_TX = DB | TX;

export { p, d, timestamps, cl_uuid };
export type { DB, TX, DB_or_TX };
