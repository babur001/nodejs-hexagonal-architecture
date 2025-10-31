import { env } from "@/infrastructure/config/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/core/db/schema",
  out: "./src/core/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
