import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig } from 'src/config/jwt.config';
import { UserDto } from 'src/user/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import Configuration from '../config/configuration';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt.refresh.token.strategy';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserDto]),
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(Configuration)],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<JwtConfig>('refresh').secret,
        signOptions: {
          expiresIn: configService.get<JwtConfig>('refresh').expiresIn,
        },
      }),
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController, UserController],
  providers: [AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    UserService,
    JwtRefreshTokenStrategy],

})
export class AuthModule {}
