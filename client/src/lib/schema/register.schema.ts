import z from "zod"
import { Role } from "../types/user.type"

export const RegisterSchema = z
  .object({
    fullName: z.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z]).{2,}$/, {
      message:"Họ tên phải có ít nhất 2 ký tự"
    }),
    
    phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {
      message: "Số điện thoại không hợp lệ"
    }),

    password: z.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
        message: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt"
      }),

    confirm: z.string(),

    role: z.enum(Role)
  })
  .refine(val => val.confirm === val.password, {
    message: "Xác nhận mật khẩu không khớp",
    path: ["confirm"]
  })