import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacher } from './teacher.entity';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    providers:[TeacherService],
    controllers:[TeacherController],
    imports:[TypeOrmModule.forFeature([teacher])],
    exports:[TeacherService]
})
export class TeacherModule {}
