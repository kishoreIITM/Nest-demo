import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Users } from './user.entity';
import { TeacherModule } from 'src/teacher/teacher.module';


@Module({
  imports:[TypeOrmModule.forFeature([Users]),StudentModule,TeacherModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
