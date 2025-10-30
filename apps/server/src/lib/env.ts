import "dotenv/config";
import z from "zod";

const env_schema = z.object({
  DATABASE_URL: z.string(),
  CORS_ORIGIN: z.url(),
  MAX_FILE_LIMIT: z.coerce.number().int().min(1).default(10),
  MAX_FILE_SIZE: z.coerce.number().int().min(1024),
  PORT: z.coerce.number().int().min(1000).max(9999).default(3000),
});

export const env = env_schema.parse(process.env);
