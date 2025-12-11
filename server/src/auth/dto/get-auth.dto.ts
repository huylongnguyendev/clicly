import { Transform } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsPhoneNumber, IsString, Matches } from "class-validator"
import sanitizeHtml from "sanitize-html"

export class LoginAuthDto {
  @IsNotEmpty()
  @IsPhoneNumber("VN", { message: "Số điện thoại không hợp lệ" })
  phone!: string

  @IsNotEmpty()
  @IsString()
  @Transform((val) => sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {}
  }) as string)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
    message: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt"
  })
  password!: string

  @IsBoolean()
  remember!: boolean
}

export interface User {
  fullName: string | null
  phone: string
  address: string | null
  email: string | null
  status: boolean
}

export interface LoginRes {
  user: User
  accessToken: string
  refreshToken: string
}

export interface AuthRes {
  message: string
  user: User
  accessToken: string
}