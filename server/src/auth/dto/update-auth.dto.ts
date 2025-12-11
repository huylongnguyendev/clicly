import { PartialType } from "@nestjs/mapped-types"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsString, MinLength } from "class-validator"
import sanitizeHtml from "sanitize-html"
import { CreateAuthDto } from "./create-auth.dto"
import { User } from "./get-auth.dto"

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsNotEmpty()
  @IsString()
  @Transform((val) => sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {}
  }) as string)
  @MinLength(2, { message: "Họ tên phải có ít nhất 2 ký tự" })
  fullName!: string

  @IsString()
  @Transform((val) => sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {}
  }) as string)
  address?: string

  @IsString()
  @Transform((val) => sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {}
  }) as string)
  email?: string
}

export interface UpdateRes {
  user: User
}
export interface UpdateAuthRes {
  user: User
  message: string
}