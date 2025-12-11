import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { hash, compare } from "bcrypt"
import { LoginAuthDto, LoginRes, User } from "./dto/get-auth.dto"
import { JwtService } from "@nestjs/jwt"
import { JwtConstant } from "src/constants/jwt.constant"
import { UpdateAuthDto, UpdateRes } from "./dto/update-auth.dto"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) { }

  async register(data: CreateAuthDto) {
    const isExist = await this.prisma.user.findUnique({
      where: { phone: data.phone }
    })

    if (isExist)
      throw new HttpException({ message: "Tài khoản đã tồn tại" }, HttpStatus.CONFLICT)

    const hashPassword: string = await hash(data.password, 12)

    await this.prisma.user.create({
      data: { ...data, password: hashPassword }
    })
  }

  async login(data: LoginAuthDto): Promise<LoginRes> {
    const isExist = await this.prisma.user.findUnique({
      where: { phone: data.phone }
    })

    if (!isExist)
      throw new UnauthorizedException({ message: "Tài khoản hoặc mật khẩu không đúng" })

    const { password, ...user } = isExist
    const isCorrectPassword = await compare(data.password, password)

    if (!isCorrectPassword)
      throw new UnauthorizedException({ message: "Tài khoản hoặc mật khẩu không đúng" })

    const payload = {
      sub: user.id,
      phone: user.phone,
      role: user.role
    }

    const accessToken = await this.jwt.signAsync(payload, {
      secret: JwtConstant.secret
    })

    const refreshToken = await this.jwt.signAsync(payload, {
      secret: JwtConstant.refresh,
      expiresIn: "5m"
    })

    const session = await this.prisma.session.findUnique({
      where: { userId: user.id }
    })

    if (session)
      await this.prisma.session.update({
        where: { id: session.id },
        data: { refreshToken }
      })
    else
      await this.prisma.session.create({
        data: {
          userId: user.id,
          refreshToken
        }
      })

    return {
      user,
      accessToken,
      refreshToken
    }
  }

  async update(data: UpdateAuthDto, userId: string | undefined): Promise<UpdateRes> {
    if (!userId)
      throw new UnauthorizedException({message: "Token không hợp lệ hoặc hết hạn"})

    const isExist = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!isExist)
      throw new HttpException({ message: "Không tìm thấy tài khoản" }, HttpStatus.NOT_FOUND)

    const updated = await this.prisma.user.update({
      where: { id: isExist.id },
      data
    })

    type UserWithoutPassword = Omit<User, "password">
    const user: UserWithoutPassword = updated

    return { user }
  }
}
