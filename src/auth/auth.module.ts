import { Module ,forwardRef} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import {  PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategy/local.strategy';
import { jwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[forwardRef(()=>UsersModule) ,PassportModule,JwtModule.register({secret:"Key",signOptions:{expiresIn:120}})],
  providers: [AuthService,localStrategy,jwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
