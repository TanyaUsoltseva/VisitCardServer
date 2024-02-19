import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { AuthServer } from 'src/services/authentication/auth/auth.service';
import { JwtStrategyService } from 'src/services/authentication/jwt-strategy/jwt-strategy.service';
import { User, UserSchema } from 'src/shemas/user/user';
import { UsersController } from '../users.controller';



@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      PassportModule,
      JwtModule.register({
        secret: jwtConstants. secret
      }),],
    
    controllers: [UsersController],
    providers: [UsersService, AuthServer, JwtStrategyService],
  })
export class UsersModule {}