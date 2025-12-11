import { $Enums } from "@prisma/client"
import { Transform } from "class-transformer"
import { IsEnum, IsNotEmpty, IsPhoneNumber, IsString, Matches } from "class-validator"
import sanitizeHtml from "sanitize-html"

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  @Transform((val) => sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {}
  }) as string)
  fullName!: string

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

  @IsEnum($Enums.Role)
  role!: $Enums.Role
}
