CREATE TABLE "MEDIA" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_url" text NOT NULL,
	"file_size" numeric(20, 6) NOT NULL,
	"file_name" text NOT NULL,
	"mime_type" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
