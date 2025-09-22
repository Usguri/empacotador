import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user?: any;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    // Pega token do header Authorization
    const authHeader = request.headers.authorization;
    let token: string | undefined;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }

    if (!token) {
      throw new UnauthorizedException('Token de autenticação não fornecido.');
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const payload = this.jwtService.verify(token, {
        secret: '49c63cb8bebdee10752a1224f1802afe',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      request.user = payload;
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new UnauthorizedException('Token inválido ou expirado.');
    }
  }
}
