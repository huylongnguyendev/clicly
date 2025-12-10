import z from "zod"
import { RegisterSchema } from "../schema/register.schema"
import { Role } from "./user.type"

export type RegisterFormType = z.infer<typeof RegisterSchema>

export type RegisterType = {
  phone: string
  password: string
  role: Role
}