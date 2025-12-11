import { Body, Controller, Post, Put, Req, Res, UseGuards } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { AuthRes, LoginAuthDto } from "./dto/get-auth.dto"
import type { Response } from "express"
import { ENV, JwtConstant } from "src/constants/jwt.constant"
import { UpdateAuthDto, UpdateAuthRes } from "./dto/update-auth.dto"
import { AuthGuard, type AuthorizationType } from "./auth.guard"

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) { }

  @Post("register")
  async register(@Body() data: CreateAuthDto): Promise<any> {
    await this.auth.register(data)

    return {
      message: "Đăng ký thành công"
    }
  }

  @Post("login")
  async login(@Body() data: LoginAuthDto, @Res({ passthrough: true }) res: Response): Promise<AuthRes> {
    const { accessToken, refreshToken, user } = await this.auth.login(data)

    if (data.remember)
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: ENV,
        sameSite: "none",
        maxAge: JwtConstant.age
      })
    else
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: ENV,
        sameSite: "none",
      })

    return {
      message: "Đăng nhập thành công",
      accessToken,
      user
    }
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Body() data: UpdateAuthDto, @Req() req: AuthorizationType): Promise<UpdateAuthRes> {
    const userId = req?.user?.sub

    const { user } = await this.auth.update(data, userId)

    return {
      message: "Cập nhật thông tin thành công",
      user: user
    }
  }
}
