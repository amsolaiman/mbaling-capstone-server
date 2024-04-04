import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthService } from "src/auth/auth.service";
import { JwtConfig } from "src/config/jwt.config";
import { Request } from 'express';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor( 
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: configService.get<JwtConfig>('refresh').secret,
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: any) {
    const userId = payload.userId;
    const refreshToken = request.body.refresh_token;
    return this.authService.getUserIfRefreshTokenMatches(refreshToken, userId);
  }
}