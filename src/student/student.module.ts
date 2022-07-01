import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';


@Module({
    imports:[TypeOrmModule.forFeature([Student])],
    providers:[StudentService],
    controllers:[StudentController],
    exports:[StudentService]

})
export class StudentModule {}
