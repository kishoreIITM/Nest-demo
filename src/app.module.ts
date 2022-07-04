import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/user.entity';
import { Student } from './student/student.entity';
import { teacher } from './teacher/teacher.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"heffalump.db.elephantsql.com",
    port:5432,
    username:"jhgdavzv",
    password:"80i1Nn6zmo8cq13u3vgLRVonejwFSVtu",
    database:"jhgdavzv",
    entities:[Users,Student,teacher],
    synchronize:true

  } ),
  StudentModule,
  UsersModule,
  TeacherModule,
  AuthModule
],
})
export class AppModule {}
