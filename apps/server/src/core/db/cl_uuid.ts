import { p } from "./p";

export const cl_uuid = () => p.uuid().primaryKey().defaultRandom();
