import { Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { CreateAuthDto } from "./dto/create-auth.dto"

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("register")
  async register(data: CreateAuthDto): Promise<any> {
    await this.auth.register(data)

    return {
      message: "Đăng ký thành công"
    }
  }
}
