import { p } from "./p";
import { d } from "./d";

export const timestamps = () => ({
  created_at: p.timestamp({ mode: "string", withTimezone: true }).notNull().defaultNow(),
  updated_at: p
    .timestamp({ mode: "string", withTimezone: true })
    .$onUpdate(() => d.sql`NOW()`),
});
