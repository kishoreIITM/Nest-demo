import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import {  PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategy/local.strategy';
@Module({
  imports:[UsersModule,PassportModule],
  providers: [AuthService,localStrategy]
})
export class AuthModule {}
