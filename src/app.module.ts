import { PrfMediaDto } from './prfmedia/prfmedia.dto';
import { NonAccountDto } from './non-account/non-account.entity';
import { MediaService } from './media/media.service';
import { MediaController } from './media/media.controller';
import { HousingDto } from './housing-unit/housing.entity';
import { PostformService } from './postform/postform.service';
import { PostformController } from './postform/postform.controller';
import { UserService } from './user/user.service';
import { UserController } from 'src/user/user.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './user/user.entity';
import { PostDto } from './entities/post.entity';
import { HousingUnitController } from './housing-unit/housing-unit.controller';
import { HousingUnitService } from './housing-unit/housing-unit.service';
import { MediaDto } from './media/media.dto';
import { ApplicationService } from './application/application.service';
import { ApplicationController } from './application/application.controller';
import { ApplicationDto } from './application/application.entity';
import { NonAccountController } from './non-account/non-account.controller';
import { NonAccountService } from './non-account/non-account.service';
import { PrfmediaController } from './prfmedia/prfmedia.controller';
import { PrfmediaService } from './prfmedia/prfmedia.service';

@Module({
  imports: ([AuthModule,
    TypeOrmModule.forFeature([
      UserDto,
      PostDto,
      HousingDto,
      MediaDto,
      ApplicationDto,
      NonAccountDto,
      PrfMediaDto
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mbalingdb',
      entities: [UserDto, PostDto, HousingDto,MediaDto,ApplicationDto,NonAccountDto, PrfMediaDto
      ],
      // synchronize: true,
      // dropSchema: true,

    })
  ]),
  
  controllers: [UserController, PostformController, HousingUnitController, MediaController, ApplicationController, NonAccountController, PrfmediaController],
  providers: [UserService, PostformService, HousingUnitService, MediaService, ApplicationService, NonAccountService, PrfmediaService],
})
export class AppModule {}
