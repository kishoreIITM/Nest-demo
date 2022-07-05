import { Module,forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Users } from './user.entity';
import { TeacherModule } from 'src/teacher/teacher.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[TypeOrmModule.forFeature([Users]),StudentModule,TeacherModule,forwardRef(()=>AuthModule) ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
