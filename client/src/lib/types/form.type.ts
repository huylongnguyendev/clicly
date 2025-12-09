import z from "zod";
import { RegisterSchema } from "../schema/register.schema"

export type RegisterFormType = z.infer<typeof RegisterSchema>