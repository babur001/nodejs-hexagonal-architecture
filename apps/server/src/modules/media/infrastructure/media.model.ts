import { cl_uuid, p, timestamps } from "@/infrastructure/database";

export const media = p.pgTable("MEDIA", {
  id: cl_uuid(),
  file_url: p.text().notNull(),
  file_size: p.numeric({ precision: 20, scale: 6 }).notNull(),
  file_name: p.text().notNull(),
  mime_type: p.text().notNull(),
  is_active: p.boolean().notNull().default(true),
  ...timestamps,
});
