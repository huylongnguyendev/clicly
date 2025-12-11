import z from "zod"

export const LoginSchema = z.object({
  phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {
    message: "Số điện thoại không hợp lệ"
  }),

  password: z.string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
      message: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt"
    }),
  
  remember: z.boolean()
})