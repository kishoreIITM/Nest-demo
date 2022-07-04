import { Injectable ,BadRequestException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) public userRepo:Repository<Users>,
     public studentService :StudentService,
     public teacherService: TeacherService){}
    
    async get(){
        let data= await this.userRepo.find()
        return data
    }

    

    async signup(data:any){
        let newUser = this.userRepo.create(data)
        await this.userRepo.insert(newUser)
        .then((reply)=>{
            console.log("User added to database Successfully")
            if (data.role=="student"){
                let newEntry = {id:reply.generatedMaps[0].uuid,...data}
                this.studentService.write(newEntry)
            }
            if (data.role=="teacher"){
                let newEntry = {id:reply.generatedMaps[0].uuid,...data}
                this.teacherService.write(newEntry)
            }          
        })
        .catch(()=>{
            throw new BadRequestException("User already exists")
        })

        
    }
}
