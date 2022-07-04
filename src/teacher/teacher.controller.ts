import { Controller,Get,Post,Put,Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {

    constructor(public teacherService : TeacherService){}

//     @Get()
//     get(){
//         return this.teacherService.findAll()
//     }

//     @Post()
//     post(@Body() data:any){
//         return this.teacherService.write(data)
//     }
}
