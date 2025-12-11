
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { Role } from "@prisma/client"

import { Request } from "express"
import { JwtConstant } from "src/constants/jwt.constant"

export interface AuthorizationType extends Request {
  user?: {
    sub: string
    phone: string
    role: Role
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthorizationType>()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException({message: "Token không hợp lệ hoặc hết hạn"})
    }
    try {
      const payload = await this.jwt.verifyAsync(
        token,
        {
          secret: JwtConstant.secret
        }
      )
      request.user = payload
    } catch {
      throw new UnauthorizedException({message: "Token không hợp lệ hoặc hết hạn"})
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? []
    return type === "Bearer" ? token : undefined
  }
}