import { Controller,Get,Post,Body  } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('student')
export class StudentController {

    constructor(public studentService : StudentService){}

    @Get()
    get(){
        return this.studentService.findAll()
    }

    @Post()
    post(@Body() data:any){
        return this.studentService.write(data)
    }

}
