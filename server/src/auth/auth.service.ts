import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { CreateAuthDto } from "./dto/create-auth.dto"
import {hash, compare} from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService
  ) { }

  async register(data: CreateAuthDto) {
    const isExist = await this.prisma.user.findUnique({
      where: { phone: data.phone }
    })

    if (isExist)
      throw new HttpException({ message: "Tài khoản đã tồn tại" }, HttpStatus.CONFLICT)
    
    const hashPassword: string = await hash(data.password, 12)

    await this.prisma.user.create({
      data: {...data, password: hashPassword}
    })
  }
}
