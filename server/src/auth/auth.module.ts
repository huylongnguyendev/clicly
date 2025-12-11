import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { JwtModule } from "@nestjs/jwt"
import { JwtConstant } from "src/constants/jwt.constant"

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: JwtConstant.secret,
    signOptions: { expiresIn: "5m" }
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
