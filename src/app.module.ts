import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { StudentModule } from './student/student.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/user.entity';
import { Student } from './student/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"heffalump.db.elephantsql.com",
    port:5432,
    username:"jhgdavzv",
    password:"80i1Nn6zmo8cq13u3vgLRVonejwFSVtu",
    database:"jhgdavzv",
    entities:[Users,Student],
    synchronize:true

  } ),
  StudentModule,
  UsersModule
],
})
export class AppModule {}
