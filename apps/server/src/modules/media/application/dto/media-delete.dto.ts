import z from "zod";

export const media_delete_schema = z.array(z.uuid()).nonempty();

export type TMediaDeleteDto = z.infer<typeof media_delete_schema>;
